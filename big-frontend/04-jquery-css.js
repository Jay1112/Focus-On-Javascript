function $(el) {
  return {
    css : function(key, value){
      el.style[key] = value;
      return this;
    }
  }
}