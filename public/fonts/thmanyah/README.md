# Thmanyah font files

Drop the .woff2 files here using exactly these names — the @font-face
declarations in `src/app/globals.css` reference them literally:

ThmanyahDisplay-Light.woff2     (300)
ThmanyahDisplay-Regular.woff2   (400)
ThmanyahDisplay-Medium.woff2    (500)
ThmanyahDisplay-Bold.woff2      (700)
ThmanyahDisplay-Black.woff2     (900)

ThmanyahText-Light.woff2        (300)
ThmanyahText-Regular.woff2      (400)
ThmanyahText-Medium.woff2       (500)

Display is used for Arabic headings and the wordmark; Text is used for
Arabic body copy. Until the files are here, Arabic falls back to the
system Arabic stack and the site still renders correctly.
