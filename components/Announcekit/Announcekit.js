
<Script>
  window.announcekit = (window.announcekit || { queue: [], on: function(n, x) { 
    window.announcekit.queue.push([n, x]); }, push: function(x) { window.announcekit.queue.push(x); } 
  });
  
  window.announcekit.push({
    "widget": "https://announcekit.app/widgets/v2/30f3IA",
    "selector": ".announcekit-widget",
    "lang": "en"
  })
/>
