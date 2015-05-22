import Ember from 'ember';

export default Ember.Component.extend({

  actualClass: 'img1',

  actualize: function() {
    Ember.run.later(this,function(){
      switch(this.get('actualClass')) {
        case 'img1':
          this.set('actualClass', 'img2');
        break;
        case 'img2':
          this.set('actualClass', 'img3');
        break;
        case 'img3':
          this.set('actualClass', 'img1');
        break;
      }
      this.actualize();
    }, 5000)
  },

  didInsertElement:function(){
    console.log('TRUC')
    this.actualize();
  }
});
