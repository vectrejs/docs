export const cdn = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css">
</head>

<body>
  <div id="app">
    <!-- Vectre components goes here -->
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js"></script>

  <script>
    Vue.use(Vectre);

    new Vue({
      el: '#app',
    });
  </script>
</body>
</html>`;

export const cdnConflict = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/spectre.css/dist/spectre-exp.min.css">
</head>

<body>
  <div id="app">
    <!-- Vectre components with prefix "my-" goes here -->
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/@vectrejs/vectre/dist/vectre.min.js"></script>

  <script>
    Vue.use(Vectre, { prefix: 'my' });

    new Vue({
      el: '#app',
    });
  </script>
</body>
</html>`;
