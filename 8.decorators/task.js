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
  let timeoutId = 0;

  return function (...args) {
    timeoutId += 1;
    if (timeoutId > 1) {
      setTimeout(() => (func(...args)), delay);
    }
    func(...args)
  }
}

function debounceDecorator2(func) {
  let timeoutId = 0;
  wrapper.count = 0;

   function wrapper(...args) {
    timeoutId += 1;
    wrapper.count += 1;
    if (timeoutId > 1) {
      setTimeout(() => (func(...args)), delay);
    }
    func(...args)
  }
  return wrapper;
}
