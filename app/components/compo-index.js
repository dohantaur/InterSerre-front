import Ember from 'ember';

export default Ember.Component.extend({
  image1:null,
  DidInsertElement:function(){
    this.set('image1' , Ember.$('#image1'));
    Ember.run.later(this,function(){

    })
  }
});
