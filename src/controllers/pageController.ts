import { Request , Response} from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req:Request, res:Response) => {

    res.render('pages/page',{
        menu : createMenuObject('all'),
        banner:{
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        filtered: Pet.getAll,
    });
}
export const dogs = (req:Request, res:Response) => {

    res.render('pages/page',{
        menu : createMenuObject('dog'),
        banner:{
            title: "Todos os Cachorros",
            background: "banner_dog.jpg"
        },
        filtered: Pet.getFromType("dog"),
    
    });
}
export const cats = (req:Request, res:Response) => {
    res.render('pages/page',{
        menu : createMenuObject('cat'),
        banner:{
            title: "Todos os Gatos",
            background: "banner_cat.jpg"
        },
        filtered: Pet.getFromType("cat"),
    });

}
export const fishes = (req:Request, res:Response) => {

    res.render('pages/page',{
        menu : createMenuObject('fish'),
        banner:{
            title: "Todos os peixes",
            background: "banner_fish.jpg"
        },
        filtered: Pet.getFromType("fish"),
    });
}