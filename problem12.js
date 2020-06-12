/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this._storage = new Map();
  this._retrieval = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this._storage.has(val)) return false;
  this._storage.set(val, this._retrieval.length);
  this._retrieval.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  let index = this._storage.get(val);
  if (index === undefined) return false;
  let endI = this._retrieval.length -1;
  let endVal = this._retrieval[endI];
  [this._retrieval[endI], this._retrieval[index]] =  [this._retrieval[index], this._retrieval[endI]] 
  this._retrieval.pop();
  this._storage.set(endVal, index);
  this._storage.delete(val);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this._retrieval[Math.floor(Math.random() * this._storage.size)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
 
 /**
 * Insert Delete GetRandom O(1)
 * Design a data structure that supports all following operations in average O(1) time.
 * 
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements. Each element must have the same probability 
 * of being returned.
 * 
 * Example:
 * // Init an empty set.
 * RandomizedSet randomSet = new RandomizedSet();
 * 
 * // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 * randomSet.insert(1);
 * 
 * // Returns false as 2 does not exist in the set.
 * randomSet.remove(2);
 * 
 * // Inserts 2 to the set, returns true. Set now contains [1,2].
 * randomSet.insert(2);
 * 
 * // getRandom should return either 1 or 2 randomly.
 * randomSet.getRandom();
 * 
 * // Removes 1 from the set, returns true. Set now contains [2].
 * randomSet.remove(1);
 * 
 * // 2 was already in the set, so return false.
 * randomSet.insert(2);
 * 
 * // Since 2 is the only number in the set, getRandom always return 2.
 * randomSet.getRandom();
 */
