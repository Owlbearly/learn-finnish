# Sisu – Finnisch lernen · Produktions-Image (z. B. für Coolify)
# Die App hat keine Laufzeit-Abhängigkeiten (nur Bun-Bordmittel: bun:sqlite, Bun.serve, HTML-Bundler).
FROM oven/bun:1.4.4-slim AS base
WORKDIR /app

# Prüf-Stufe: Inhalte validieren und Tests ausführen – schlägt etwas fehl, bricht der Build ab
FROM base AS test
COPY . .
RUN bun scripts/validate.ts > /dev/null && bun test

# Laufzeit
FROM base AS runtime
ENV NODE_ENV=production \
    PORT=3000 \
    DB_PATH=/app/data/learn-finnish.sqlite
COPY --from=test /app/package.json ./
COPY --from=test /app/src ./src
COPY --from=test /app/public ./public
RUN mkdir -p /app/data && chown -R bun:bun /app/data
USER bun
VOLUME ["/app/data"]
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD bun -e "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/api/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"
CMD ["bun", "src/server/index.ts"]
