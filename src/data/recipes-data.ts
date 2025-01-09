export type Recipe = {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    productId: number;
};

export const recipes: Recipe[] = [
    {
        productId: 1, // Ahtapot Kol Marine
        title: 'Ahtapot Kol Salatası',
        description: 'Taze sebzeler ve marine ahtapot kol ile hazırlanan lezzetli bir salata.',
        ingredients: [
            '200g marine ahtapot kol',
            '1 adet kırmızı soğan',
            '1 adet salatalık',
            '1 avuç cherry domates',
            'Taze kekik',
            'Zeytinyağı',
            'Limon suyu'
        ],
        instructions: [
            'Ahtapot kollarını küçük parçalara bölün.',
            'Kırmızı soğanı ince ince doğrayın.',
            'Salatalığı ve domatesleri dilimleyin.',
            'Tüm malzemeleri bir kapta karıştırın.',
            'Üzerine zeytinyağı, limon suyu ve taze kekik ekleyip servis yapın.'
        ]
    },
    {
        productId: 2, // Marine Hamsi
        title: 'Marine Hamsi Bruschetta',
        description: 'Kızarmış ekmek üzerinde marine hamsi ve taze otlarla hazırlanan İtalyan usulü aperatif.',
        ingredients: [
            '200g marine hamsi',
            '1 baget ekmek',
            '2 diş sarımsak',
            'Taze fesleğen yaprakları',
            'Zeytinyağı'
        ],
        instructions: [
            'Baget ekmeği dilimleyip kızartın.',
            'Kızarmış ekmekleri sarımsakla ovun.',
            'Her dilimin üzerine birkaç marine hamsi yerleştirin.',
            'Üzerine taze fesleğen yaprakları koyun.',
            'Servis öncesi zeytinyağı gezdirin.'
        ]
    },
    {
        productId: 3, // Karides Marine
        title: 'Marine Karides Makarnası',
        description: 'Marine karides ve krema soslu lezzetli bir makarna tarifi.',
        ingredients: [
            '300g linguine makarna',
            '200g marine karides',
            '2 diş sarımsak',
            '200ml krema',
            'Taze maydanoz',
            'Parmesan peyniri'
        ],
        instructions: [
            'Makarnayı tuzlu suda haşlayın.',
            'Bir tavada sarımsakları zeytinyağında kızartın.',
            'Marine karidesleri tavaya ekleyip 2-3 dakika pişirin.',
            'Kremayı ekleyip karıştırın ve kısık ateşte 5 dakika pişirin.',
            'Haşlanmış makarnayı sosla karıştırın.',
            'Üzerine taze maydanoz ve rendelenmiş parmesan peyniri serperek servis yapın.'
        ]
    },
    {
        productId: 4, // Midye Marine
        title: 'Marine Midye Tapas',
        description: 'İspanyol usulü marine midye ve patates tapas.',
        ingredients: [
            '200g marine midye',
            '2 orta boy patates',
            '1 kırmızı biber',
            '1 sarı biber',
            'Zeytinyağı',
            'Taze kekik'
        ],
        instructions: [
            'Patatesleri küp şeklinde doğrayıp haşlayın.',
            'Biberleri ince şeritler halinde doğrayın.',
            'Haşlanmış patatesleri zeytinyağında kızartın.',
            'Kızarmış patatesleri, doğranmış biberleri ve marine midyeleri karıştırın.',
            'Üzerine taze kekik serperek servis yapın.'
        ]
    },
    {
        productId: 5, // Somon Füme
        title: 'Füme Somon Salata',
        description: 'Taze yeşillikler üzerine füme somon dilimleri, avokado ve kiraz domates ile hazırlanan lezzetli bir salata.',
        ingredients: [
            '100g füme somon',
            'Karışık yeşillik',
            '1 adet avokado',
            '10 adet kiraz domates',
            'Zeytinyağı ve limon sosu'
        ],
        instructions: [
            'Yeşillikleri yıkayıp kurulayın',
            'Avokadoyu dilimleyin',
            'Domatesleri ikiye bölün',
            'Malzemeleri karıştırıp üzerine somon dilimlerini yerleştirin',
            'Zeytinyağı ve limon sosu ile servis yapın'
        ]
    },
    {
        productId: 6, // Levrek Füme
        title: 'Füme Levrek Bruschetta',
        description: 'Kızarmış ekşi maya ekmeği üzerine füme levrek, kapari ve taze dereotu ile hazırlanan İtalyan usulü bruschetta.',
        ingredients: [
            '100g füme levrek',
            '4 dilim ekşi maya ekmeği',
            'Kapari',
            'Taze dereotu',
            'Zeytinyağı',
            'Taze sıkılmış limon suyu'
        ],
        instructions: [
            'Ekmeği dilimleyip kızartın',
            'Füme levreği ince dilimleyin',
            'Kızarmış ekmeklerin üzerine levrek dilimlerini yerleştirin',
            'Üzerine kapari ve dereotu serpin',
            'Zeytinyağı ve limon suyu gezdirip servis yapın'
        ]
    },
    {
        productId: 7, // Uskumru Füme
        title: 'Füme Uskumru Pate',
        description: 'Füme uskumru ile hazırlanan kremsi ve lezzetli bir pate tarifi.',
        ingredients: [
            '200g füme uskumru',
            '100g krem peynir',
            '1 adet limon suyu',
            'Taze dereotu',
            'Karabiber'
        ],
        instructions: [
            'Füme uskumruyu küçük parçalara ayırın',
            'Uskumru, krem peynir ve limon suyunu blenderdan geçirin',
            'Karışıma ince kıyılmış dereotu ve karabiber ekleyin',
            'Karışımı bir kaseye alıp buzdolabında 1 saat dinlendirin',
            'Kızarmış ekmek dilimleri ile servis yapın'
        ]
    },
    {
        productId: 8, // Ahtapot Füme
        title: 'Füme Ahtapot Carpaccio',
        description: 'İnce dilimlenmiş füme ahtapot ile hazırlanan İtalyan usulü carpaccio.',
        ingredients: [
            '150g füme ahtapot',
            'Roka yaprakları',
            'Parmesan peyniri',
            'Kapari',
            'Zeytinyağı',
            'Balsamik sirke'
        ],
        instructions: [
            'Füme ahtapotu çok ince dilimleyin',
            'Servis tabağına roka yapraklarını yerleştirin',
            'Roka yapraklarının üzerine ahtapot dilimlerini dizin',
            'Üzerine ince dilimlenmiş parmesan peyniri ve kapari serpin',
            'Zeytinyağı ve balsamik sirke gezdirerek servis yapın'
        ]
    }
];

