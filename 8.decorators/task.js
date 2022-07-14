function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    
    cache.push({ hash, value: result });
    if (cache.length > 5) {
      cache.shift();
    }

    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;

  return function (...args) {
    if (isFirstCall) {
      isFirstCall = false;
      return func(...args);
    };

    clearTimeout(timeoutId);
    
    setTimeout(() => {
      return func(...args);
    }, delay);
  };
}

function debounceDecorator2(func) {
  let timeoutId = null;
  let isFirstCall = true;

  function wrapper() {
    wrapper.count += 1;
  
    return function (...args) {
      if (isFirstCall) {
        isFirstCall = false;
        return func(...args);
      };

      clearTimeout(timeoutId);
    
      setTimeout(() => {
        return func(...args);
      }, delay);
    };
  };
  wrapper.count = 0;
  return wrapper;
}
