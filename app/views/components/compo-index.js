import Ember from 'ember';

export default Ember.View.extend({
  image1:null,
  classNames: 'img1',
  DidInsertElement:function(){
    Ember.run.later(this,function(){
      console.log('prout')
      if(this.get('claclassNames')==='img1'){
        this.set('claclassNames','img2')
      }
      if(this.get('claclassNames')==='img2'){
        this.set('claclassNames','img3')
      }
      if(this.get('claclassNames')==='img3'){
        this.set('claclassNames','img1')
      }
    })
  }
});
