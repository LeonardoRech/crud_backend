'use strict';

const firebase = require('../db');
const Produto = require('../models/produto');
const firestore = firebase.firestore();

const addProduto = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('produtos').doc().set(data);
        res.send('Record saved successfuly')
    }catch(error){
        res.status(400).send(error.message)
    }
}

const getAllProdutos = async (req, res, next) => {
    try{
        const produtos = await firestore.collection('produtos');
        const data = await produtos.get();
        const produtoArray = [];
        if(data.empty){
            res.status(404).send(error.message);
        }else{
            data.forEach(doc => {
                const produto = new Produto(
                    doc.id,
                    doc.data().nome,
                    doc.data().marca,
                    doc.data().valor
                );
                produtoArray.push(produto);
            });
            res.send(produtoArray);
        }
    }catch (error) {
        res.status(400).send(error.message)
    }
}

const getProduto = async (req, res, next) => {
    try{
        const id = req.params.id;
        const produto = await firestore.collection('produtos').doc(id);
        const data = await produto.get();
        if (!data.exists){
            res.status(404).send('Produto with the give ID not found');
        } else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduto = async (req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const produto = await firestore.collection('produtos').doc(id);
        await produto.update(data); 

        res.send('Produto record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduto = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('produtos').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    addProduto,
    getAllProdutos,
    getProduto,
    updateProduto,
    deleteProduto
}