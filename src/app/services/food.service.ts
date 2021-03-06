import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Arroz Nicoya 10Lb',
        price: 250,
        image: 'assets/images/foods/Arroz.png',
        description:
          'Arroz 100% nicaragüense, cultivado y procesado en Beneficio Don Samuel, Sébaco, Nicaragua.',
      },
      {
        id: 2,
        title: 'Aceite de Oliva',
        price: 120,
        image: 'assets/images/foods/aceite-oliva.png',
        description:
          'Producto de origen español obtenido de la primera prensada de la aceituna, proceso que mantiene todas las propiedades de la aceituna intactas y proporciona el mayor grado de pureza.',
      },
      {
        id: 3,
        title: 'Leche LALA',
        price: 35,
        image: 'assets/images/foods/Leche.png',
        description:
          'Leche Lala Semidescremada Reducida en grasa 1LT',
      },
      {
        id: 4,
        title: 'Mantequilla',
        price: 120,
        image: 'assets/images/foods/mantequilla.png',
        description:
          'Mantequilla a base de aceite de soja, palmiste y aceite de palma, sal, palmitato de vitamina A.',
      },
      {
        id: 5,
        title: 'Queso fresco 1Lb',
        price: 58,
        image: 'assets/images/foods/queso-fresco.png',
        description:
          'Queso Fresco 100% Nicaraguense',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
