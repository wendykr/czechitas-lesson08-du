# Funkce vyšších řádů, události - Lekce 8

Domácí úkol pro kurz JavaScript 1 od Czechitas.

## 1. Catering

Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

**Just Food**: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

**Your Mama**: Dodává středně drahé jídlo vyrobené z lepších surovin.

**Flavour Haven**: Dodává drahé jídlo z kvalitních surovin.


Napište pro každou z těchto společností funkci s jedním parametrem, který udává, pro kolik lidí si catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

```javascript
catering od Flavour Haven pro 100 lidí za 300000 Kč
```

Vyzkoušejte si vaše funkce v konzoli. Poté napište funkci `createEvent`, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce `createEvent` pak vrátí zprávu ve smyslu

```javascript
Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
```