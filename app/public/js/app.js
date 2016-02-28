const layoutTemplate = `
<style>
.demo-layout-waterfall .mdl-layout__header-row .mdl-navigation__link:last-of-type  {
  padding-right: 0;
}
</style>

<div class="demo-layout-waterfall mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header" id="header">
    <!-- <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Pedido</span>
    </div> -->
  </header>
  <div class="mdl-layout__drawer" id="drawer">
    <!-- <span class="mdl-layout-title">ModeloNow</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="">A</a>
      <a class="mdl-navigation__link" href="">B</a>
      <a class="mdl-navigation__link" href="">C</a>
      <a class="mdl-navigation__link" href="">D</a>
    </nav> -->
  </div>
  <main class="mdl-layout__content">
    <div class="page-content" id="content"></div>
  </main>
</div>`;

const LayoutView = Marionette.LayoutView.extend({
  el: 'main',
  template: _.template(layoutTemplate),
  regions: {
    header: '#header',
    drawer: '#drawer',
    content: '#content'
  },
  onRender() {
    // this.getRegion('content').show(new Marionette.Form({
    //   text: '',
    //   buttons: [
    //     {
    //       label: 'SI',
    //       onClick: function() {
    //         alert('SI');
    //       }
    //     },
    //     {
    //       label: 'NO',
    //       onClick: function() {
    //         alert('NO');
    //       }
    //     }
    //   ]
    // }));
  }
});

const layout = new LayoutView();

layout.render();


layout.getRegion('drawer').show(new Marionette.Modelo.DrawerView({
  menu: [{
    label: 'Pedir ahora',
    href: '/order'
  }, {
    label: 'Historial de pedidos',
    href: '/orders'
  }, {
    label: 'Mi Perfil',
    href: '/profile'
  }, {
    label: 'Eventos',
    href: '/events'
  }],
  user: new Backbone.Model({ name: 'Barney', lastName: 'Gumble', image: 'http://assets.fxnetworks.com/shows/the-simpsons/photos/swsb_character_fact_barney_550x960.png' })
}));
//layout.getRegion('header').show(new Marionette.form());

const Router = Marionette.AppRouter.extend({
  appRoutes: {
    'order': 'order',
    'orders': 'orders',
    'events': 'events',
    'profile': 'profile'
  },
  controller: {
    order() {

    },
    orders() {

    },
    events() {

    },
    profile() {

    },
  },
  onRoute: function () {
    document.body.querySelector('.mdl-layout__obfuscator.is-visible').click();
  }
});

new Router();

Backbone.Intercept.start();
Backbone.history.start({
  pushState: true
});
