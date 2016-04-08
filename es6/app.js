    'use strict';
    
    const s = new WeakSet();
    
    for (let i = 0 ; ; i++) {
        s.add({});
        if (i % 100000 === 0)
            console.log(`${i} :${process.memoryUsage().heapUsed}`);
    }



