// module.exports = {
//     'stringHash':(val, arrayLen) => {
//         let total = 0;
//         let WEIRD_PRIME = 21;
//         for (char of val) {
//             let value = char.charCodeAt(0) - 96;
//             total = (total + WEIRD_PRIME + value) % arrayLen;
//         } 
//         return total;
//     },
// }

class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }
    hash (val) {
        let total = 0;
        let WEIRD_PRIME = 21;
        for (let char of val) {
            let value = char.charCodeAt(0) - 96;
            total = (total + WEIRD_PRIME + value) % this.size;
        } 
        return total;
    }
    set (key, value) {
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key) {
        let index = this.hash(key);
        if (!this.keyMap[index]) return;
        let i = 0
        const map = this.keyMap[index];
        for (let i = 0; i < map.length; i++) {
            if (map[i][0] === key) return map[i][1]
        }
        return;
    }

    getData(index) {
        const data = [];
        for (let i = 0; i < this.size; i++) {
            for (let keyVal of this.values[i]) {
                data.push(keyVal[index]);
            }
        }
        return data;
    }

    keys() {
        return this.getData(0)
    }

    values() {
        return this.getData(1)
    }
}

let ht = new HashTable(17);
ht.set('marroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')
console.log(ht.get('olive'))