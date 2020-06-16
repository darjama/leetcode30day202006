var validIPAddress = function(IP) {
  let IPv4Arr = IP.split('.');
  let IPv6Arr = IP.split(':');
  if (IPv4Arr.length === 4) return isIPv4(IPv4Arr) ? 'IPv4' : 'Neither';
  if (IPv6Arr.length === 8) return isIPv6(IPv6Arr) ? 'IPv6' : 'Neither';
  return 'Neither';
};

var isIPv4 = function(array) {
    const regex = /[^0-9]/g;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '') return false;
    if (regex.test(array[i])) return false;
    if (array[i][0] === '0' && array[i].length > 1) return false;
    let num = Number(array[i]);
    if (num < 0 || num > 255) return false;
  }
  return true;
}

var isIPv6 = function(array) {
   const regex = /[^0-9A-F]/gi;
  for (let i = 0; i < array.length; i++) {
    if(array[i].length > 4) return false;
    if(array[i] === '') return false;
    if (regex.test(array[i])) return false;
  }
  return true;
}

/**
 * Validate IP Address
 * Write a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.
 * 
 * IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging 
 * from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;
 * 
 * Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.
 * 
 * IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups 
 * are separated by colons (":"). For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one. Also, we 
 * could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, 
 * so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).
 * 
 * However, we don't replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to 
 * pursue simplicity. For example, 2001:0db8:85a3::8A2E:0370:7334 is an invalid IPv6 address.
 * 
 * Besides, extra leading zeros in the IPv6 is also invalid. For example, the address 02001:0db8:85a3:0000:0000:8a2e:0370:7334 
 * is invalid.
 * 
 * Note: You may assume there is no extra space or special characters in the input string.
 * 
 * Example 1:
 * Input: "172.16.254.1"
 * Output: "IPv4"
 * Explanation: This is a valid IPv4 address, return "IPv4".
 * 
 * Example 2:
 * Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 * Explanation: This is a valid IPv6 address, return "IPv6".
 * 
 * Example 3:
 * Input: "256.256.256.256"
 * Output: "Neither"
 * Explanation: This is neither a IPv4 address nor a IPv6 address.
 * 
 * @param {string} IP
 * @return {string}
 */
