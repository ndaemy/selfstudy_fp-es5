function _each(array, iter) {
  for (let i = 0; i < array.length; i++) {
    iter(array[i]);
  }
  return array;
}

function _filter(array, predicate) {
  const newArray = [];
  _each(array, function (v) {
    if (predicate(v)) {
      newArray.push(v);
    }
  });
  return newArray;
}

function _map(array, mapper) {
  const newArray = [];
  _each(array, function (v) {
    newArray.push(mapper(v));
  });
  return newArray;
}

function _curry(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length === 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

const _get = _curryr(function (obj, key) {
  return obj ? obj[key] : undefined;
});

const slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length === 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (v) {
    memo = iter(memo, v);
  });
  return memo;
}
