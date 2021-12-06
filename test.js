const { data } = require("./data");

// nb produits
//console.log(data.length)

// Ajout prix "nombre.toLocaleString()""
const formatage = data.forEach((article) => article.facture = article.prix.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }))
// console.log(formatage)

// articles ordre alphab
const sort = data.sort((articleA, articleB) => articleA.nom > articleB.nom ? 1 : -1);
// console.log(sort);

// les legumes
const legumes = data.filter(({ cat }) => cat.toLowerCase() == "legume")
// console.log(legumes);

const facture = data.reduce( (acc, {prix}) => acc+prix,0 );
//console.log(facture.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }))

// les catégories
categories = data.reduce((acc, { cat }) => {
    if (!acc.includes(cat)) acc.push(cat)
    return acc
}, []);
// console.log(categories)

// nb d'articles / catégorie
const nbArtByCat = data.reduce((a, { cat }) => {
    (!a[cat]) ? a[cat] = 1 : a[cat] += 1
    return a;
}, {});
// console.log(nbArtByCat);

// la catégorie avec le plus de produit
const max = Object.entries(nbArtByCat).sort( (catA,catB) => catA[1] > catB[1] ? -1 : 1)[0];
//console.log(max);

// articles / catégorie
const artByCat = data.reduce((a, { cat, nom }) => {
    if (!a[cat]) a[cat] = [];
    a[cat].push(nom)
    return a;
}, []);
console.log(artByCat);

 // articles / prix
const prixByCat = data.reduce((a, { cat, prix }) => {
    if (!a[cat]) a[cat] = [];
    a[cat].push(prix)
    return a;
}, []);

const addition = Object.entries(prixByCat).map(([cat, prix]) => {
    return {
        categorie: cat,
        total: prix.reduce( (acc,cur) => acc+cur )
    }
})
//console.log(JSON.stringify(addition))

//console.log(addition.reduce( (acc, {total}) => acc+total,0 ) )