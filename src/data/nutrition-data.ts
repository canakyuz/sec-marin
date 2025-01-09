export type NutritionInfo = {
    per100g: {
        energy: { kj: number; kcal: number };
        fat: {
            total: number;
            saturated: number;
            unsaturated: number;
        };
        carbs: {
            total: number;
            sugars: number;
        };
        protein: number;
        salt: number;
    };
    perServing: {
        size: number;
        energy: { kj: number; kcal: number };
        fat: {
            total: number;
            saturated: number;
            unsaturated: number;
        };
        carbs: {
            total: number;
            sugars: number;
        };
        protein: number;
        salt: number;
    };
};

export const productNutrition: Record<number, NutritionInfo> = {
    1: { // Ahtapot Kol Marine
        per100g: {
            energy: { kj: 334, kcal: 80 },
            fat: { total: 1.5, saturated: 0.3, unsaturated: 1.2 },
            carbs: { total: 2, sugars: 0 },
            protein: 15,
            salt: 1.2
        },
        perServing: {
            size: 50,
            energy: { kj: 167, kcal: 40 },
            fat: { total: 0.75, saturated: 0.15, unsaturated: 0.6 },
            carbs: { total: 1, sugars: 0 },
            protein: 7.5,
            salt: 0.6
        }
    },
    2: { // Marine Hamsi
        per100g: {
            energy: { kj: 628, kcal: 150 },
            fat: { total: 9, saturated: 2, unsaturated: 7 },
            carbs: { total: 0, sugars: 0 },
            protein: 18,
            salt: 1.5
        },
        perServing: {
            size: 50,
            energy: { kj: 314, kcal: 75 },
            fat: { total: 4.5, saturated: 1, unsaturated: 3.5 },
            carbs: { total: 0, sugars: 0 },
            protein: 9,
            salt: 0.75
        }
    },
    3: { // Karides Marine
        per100g: {
            energy: { kj: 418, kcal: 100 },
            fat: { total: 2, saturated: 0.5, unsaturated: 1.5 },
            carbs: { total: 1, sugars: 0 },
            protein: 20,
            salt: 1.8
        },
        perServing: {
            size: 50,
            energy: { kj: 209, kcal: 50 },
            fat: { total: 1, saturated: 0.25, unsaturated: 0.75 },
            carbs: { total: 0.5, sugars: 0 },
            protein: 10,
            salt: 0.9
        }
    },
    4: { // Midye Marine
        per100g: {
            energy: { kj: 376, kcal: 90 },
            fat: { total: 2.5, saturated: 0.5, unsaturated: 2 },
            carbs: { total: 4, sugars: 0 },
            protein: 12,
            salt: 1.5
        },
        perServing: {
            size: 50,
            energy: { kj: 188, kcal: 45 },
            fat: { total: 1.25, saturated: 0.25, unsaturated: 1 },
            carbs: { total: 2, sugars: 0 },
            protein: 6,
            salt: 0.75
        }
    },
    5: { // Somon Füme
        per100g: {
            energy: { kj: 733.89, kcal: 175.4 },
            fat: { total: 2.16, saturated: 0.74, unsaturated: 1.42 },
            carbs: { total: 10.29, sugars: 0.00 },
            protein: 28.70,
            salt: 0.84
        },
        perServing: {
            size: 55,
            energy: { kj: 403.64, kcal: 96.47 },
            fat: { total: 1.19, saturated: 0.41, unsaturated: 0.78 },
            carbs: { total: 5.66, sugars: 0.00 },
            protein: 15.79,
            salt: 0.46
        }
    },
    6: { // Levrek Füme
        per100g: {
            energy: { kj: 502, kcal: 120 },
            fat: { total: 3, saturated: 0.8, unsaturated: 2.2 },
            carbs: { total: 0, sugars: 0 },
            protein: 24,
            salt: 1.2
        },
        perServing: {
            size: 50,
            energy: { kj: 251, kcal: 60 },
            fat: { total: 1.5, saturated: 0.4, unsaturated: 1.1 },
            carbs: { total: 0, sugars: 0 },
            protein: 12,
            salt: 0.6
        }
    },
    7: { // Uskumru Füme
        per100g: {
            energy: { kj: 753, kcal: 180 },
            fat: { total: 12, saturated: 3, unsaturated: 9 },
            carbs: { total: 0, sugars: 0 },
            protein: 20,
            salt: 1.5
        },
        perServing: {
            size: 50,
            energy: { kj: 376.5, kcal: 90 },
            fat: { total: 6, saturated: 1.5, unsaturated: 4.5 },
            carbs: { total: 0, sugars: 0 },
            protein: 10,
            salt: 0.75
        }
    },
    8: { // Ahtapot Füme
        per100g: {
            energy: { kj: 418, kcal: 100 },
            fat: { total: 1.5, saturated: 0.3, unsaturated: 1.2 },
            carbs: { total: 2, sugars: 0 },
            protein: 18,
            salt: 1.5
        },
        perServing: {
            size: 50,
            energy: { kj: 209, kcal: 50 },
            fat: { total: 0.75, saturated: 0.15, unsaturated: 0.6 },
            carbs: { total: 1, sugars: 0 },
            protein: 9,
            salt: 0.75
        }
    }
};
