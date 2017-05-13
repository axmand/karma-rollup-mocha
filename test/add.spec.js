import add from './../src/add';
import sub from './../src/sub';

describe('#1 test add.js funciont', () => {

    describe("1.add", () => {
        it("ve2向量基本运算", () => {
            let a = 1, b = 2;
            let c = add(a, b);
            expect(c).to.be.eqls(3);
        });
    });

    describe("2.sub", () => {
        it("ve2向量基本运算", () => {
            let a = 1, b = 2;
            let c = sub(a, b);
            expect(c).to.be.eqls(-1);
        });
    });


});