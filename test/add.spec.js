import add from './../src/add';

describe('#1 test add.js funciont', () => {

    describe("", () => {
        it("ve2向量基本运算", () => {
            let a=1,b=2;
            let c=add(a,b);
            expect(c).to.be.eqls(3);
        });
    });

});