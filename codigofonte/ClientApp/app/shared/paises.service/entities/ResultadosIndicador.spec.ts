/// <reference types="jasmine" />
import { ResultadosIndicador } from './ResultadosIndicador';


describe('class ResultadoIndicador', () => {
    
    describe('testing simple instance', () => {
        const instance = new ResultadosIndicador({id: 1, localidade: 'BR', valores: [], periodos: []});

        it('should have id 1', () => {
            expect(instance.id).toBe(1);
        });

        it('should have localidade equal BR', () => {
            expect(instance.localidade).toBe('BR');
        });

        it('should return undefined to periodoMaisRecente', () => {
            expect(instance.periodoMaisRecente).toBeUndefined();
        });

        describe('call getValores passing 3 periods', () => {
            const valores = instance.getValores(['2010', '2011', '2012']);

            it('should return an array with 3 itens', () => {
                expect(valores.length).toBe(3);
            });

            it('all itens should be undefined', () => {
                expect(valores.every(valor => valor === undefined)).toBeTruthy();
            });
        });

    });

    describe("converting JSON response", () => {
        const json = [
            {"id":62941,"res":[{"localidade":"AR","res":{"-":"Buenos Aires","1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":null,"2000-2002":null,"2000-2005":null,"2001":null,"2001-2003":null,"2002":null,"2002-2004":null,"2003":null,"2003-2005":null,"2004":null,"2004-2006":null,"2005":null,"2005-2007":null,"2005-2010":null,"2006":null,"2006-2008":null,"2007":null,"2007-2009":null,"2008":null,"2008-2010":null,"2009":null,"2009-2011":null,"2010":null,"2010-2012":null,"2010-2015":null,"2011":null,"2011-2013":null,"2012":null,"2012-2014":null,"2013":null,"2013-2015":null,"2014":null,"2014-2016":null,"2015":null,"2016":null,"2017":null,"2018":null}},{"localidade":"BR","res":{"-":"Brasília","1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":null,"2000-2002":null,"2000-2005":null,"2001":null,"2001-2003":null,"2002":null,"2002-2004":null,"2003":null,"2003-2005":null,"2004":null,"2004-2006":null,"2005":null,"2005-2007":null,"2005-2010":null,"2006":null,"2006-2008":null,"2007":null,"2007-2009":null,"2008":null,"2008-2010":null,"2009":null,"2009-2011":null,"2010":null,"2010-2012":null,"2010-2015":null,"2011":null,"2011-2013":null,"2012":null,"2012-2014":null,"2013":null,"2013-2015":null,"2014":null,"2014-2016":null,"2015":null,"2016":null,"2017":null,"2018":null}},{"localidade":"ES","res":{"-":"Madrid","1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":null,"2000-2002":null,"2000-2005":null,"2001":null,"2001-2003":null,"2002":null,"2002-2004":null,"2003":null,"2003-2005":null,"2004":null,"2004-2006":null,"2005":null,"2005-2007":null,"2005-2010":null,"2006":null,"2006-2008":null,"2007":null,"2007-2009":null,"2008":null,"2008-2010":null,"2009":null,"2009-2011":null,"2010":null,"2010-2012":null,"2010-2015":null,"2011":null,"2011-2013":null,"2012":null,"2012-2014":null,"2013":null,"2013-2015":null,"2014":null,"2014-2016":null,"2015":null,"2016":null,"2017":null,"2018":null}},{"localidade":"US","res":{"-":"Washington D.C.","1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":null,"2000-2002":null,"2000-2005":null,"2001":null,"2001-2003":null,"2002":null,"2002-2004":null,"2003":null,"2003-2005":null,"2004":null,"2004-2006":null,"2005":null,"2005-2007":null,"2005-2010":null,"2006":null,"2006-2008":null,"2007":null,"2007-2009":null,"2008":null,"2008-2010":null,"2009":null,"2009-2011":null,"2010":null,"2010-2012":null,"2010-2015":null,"2011":null,"2011-2013":null,"2012":null,"2012-2014":null,"2013":null,"2013-2015":null,"2014":null,"2014-2016":null,"2015":null,"2016":null,"2017":null,"2018":null}}]},{"id":62957,"res":[{"localidade":"AR","res":{"-":null,"1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":"2909000","2000-2002":null,"2000-2005":null,"2001":"2620000","2001-2003":null,"2002":"2820000","2002-2004":null,"2003":"2995000","2003-2005":null,"2004":"3457000","2004-2006":null,"2005":"3823000","2005-2007":null,"2005-2010":null,"2006":"4173000","2006-2008":null,"2007":"4562000","2007-2009":null,"2008":"4700000","2008-2010":null,"2009":"4308000","2009-2011":null,"2010":"5325000","2010-2012":null,"2010-2015":null,"2011":"5705000","2011-2013":null,"2012":"5587000","2012-2014":null,"2013":"5246000","2013-2015":null,"2014":"5931000","2014-2016":null,"2015":"5736000","2016":"5559000","2017":null,"2018":null}},{"localidade":"BR","res":{"-":null,"1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":"5313000","2000-2002":null,"2000-2005":null,"2001":"4773000","2001-2003":null,"2002":"3785000","2002-2004":null,"2003":"4133000","2003-2005":null,"2004":"4794000","2004-2006":null,"2005":"5358000","2005-2007":null,"2005-2010":null,"2006":"5017000","2006-2008":null,"2007":"5026000","2007-2009":null,"2008":"5050000","2008-2010":null,"2009":"4802000","2009-2011":null,"2010":"5161000","2010-2012":null,"2010-2015":null,"2011":"5433000","2011-2013":null,"2012":"5677000","2012-2014":null,"2013":"5813000","2013-2015":null,"2014":"6430000","2014-2016":null,"2015":"6306000","2016":"99999999999998","2017":null,"2018":null}},{"localidade":"ES","res":{"-":null,"1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":"46403000","2000-2002":null,"2000-2005":null,"2001":"48565000","2001-2003":null,"2002":"50331000","2002-2004":null,"2003":"50854000","2003-2005":null,"2004":"52430000","2004-2006":null,"2005":"55914000","2005-2007":null,"2005-2010":null,"2006":"58004000","2006-2008":null,"2007":"58666000","2007-2009":null,"2008":"57192000","2008-2010":null,"2009":"52178000","2009-2011":null,"2010":"52677000","2010-2012":null,"2010-2015":null,"2011":"56177000","2011-2013":null,"2012":"57464000","2012-2014":null,"2013":"60675000","2013-2015":null,"2014":"64939000","2014-2016":null,"2015":"68215000","2016":"99999999999998","2017":null,"2018":null}},{"localidade":"US","res":{"-":null,"1970":null,"1990":null,"1991":null,"1992":null,"1993":null,"1994":null,"1995":null,"1995-2000":null,"1996":null,"1997":null,"1998":null,"1999":null,"1999-2001":null,"2000":"51238000","2000-2002":null,"2000-2005":null,"2001":"46927000","2001-2003":null,"2002":"43581000","2002-2004":null,"2003":"41218000","2003-2005":null,"2004":"46086000","2004-2006":null,"2005":"49206000","2005-2007":null,"2005-2010":null,"2006":"50977000","2006-2008":null,"2007":"56135000","2007-2009":null,"2008":"58007000","2008-2010":null,"2009":"55103000","2009-2011":null,"2010":"60010000","2010-2012":null,"2010-2015":null,"2011":"62821000","2011-2013":null,"2012":"66657000","2012-2014":null,"2013":"69995000","2013-2015":null,"2014":"75022000","2014-2016":null,"2015":"77510000","2016":"99999999999998","2017":null,"2018":null}}]}
        ];

        const params = ResultadosIndicador.toResultadoModel(json);

        it("should generate an array of 8 itens", () => {
            expect(params.length).toBe(8);
        });

        it("should have 4 itens with id 62941", () => {
            let arr = params.filter(p => p.id === 62941);
            expect(arr.length).toBe(4);
        });

        it("should have 2 itens with localidade BR", () => {
            let arr = params.filter(p => p.localidade === "BR");
            expect(arr.length).toBe(2);
        });

        describe("converted json used to instantiate ResultadosIndicador", () => {
            const resultados = params.map(obj => new ResultadosIndicador(obj));
            const ex1 = resultados.find(resultado => resultado.id === 62941 && resultado.localidade === 'BR');
            const ex2 = resultados.find(resultado => resultado.id === 62957 && resultado.localidade === 'BR');

            it ('Resultado de id 62941 e localidade BR deve ter apenas um periodo', () => {
                if (ex1) {
                    expect(ex1.periodos.length).toBe(1);
                }
            });

            it ('Resultado de id 62941 e localidade BR deve ter como valor Brasília', () => {
                if (ex1) {
                    expect(ex1.valorMaisRecente).toBe("Brasília");
                }
            });
        });
    });


});