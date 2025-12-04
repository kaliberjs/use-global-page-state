module.exports = {
  kaliber: {
    includeInServerCompilation: [
      /^@kaliber\/use-global-page-state/
    ],
    reportError(e) { console.error(e) }
  }
}
