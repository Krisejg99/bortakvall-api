/**
 * Example Seeder
 */
import app from '../src/app'
import prisma from '../src/prisma'

async function main() {
	/**
	 * Publishers
	 */
	// const hutchinson = await prisma.publisher.upsert({
	// 	where: { id: 1 },
	// 	update: {},
	// 	create: { id: 1, name: "Hutchinson" }
	// })

	/**
	 * Authors
	 */
	// const clarke = await prisma.author.upsert({
	// 	where: { id: 1 },
	// 	update: {},
	// 	create: { name: "Sir Arthur C. Clarke" }
	// })

	/**
	 * Books
	 */
	// const odessey = await prisma.book.upsert({
	// 	where: { id: 1 },
	// 	update: {},
	// 	create: {
	// 		title: "2001: A Space Odessey",
	// 		pages: 224,
	// 		publisherId: hutchinson.id,
	// 		authors: {
	// 			connect: [
	// 				{ id: clarke.id },
	// 			],
	// 		}
	// 	}
	// })
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})


/*
// All products

const everything = [
    {
        "name": "Gott & Blandat Giants",
        "description": "<p>En mix av lakrits och gelé med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, VETEMJÖL, melass, syra (citronsyra), fuktighetsbevarande medel (sorbitoler, glycerol), lakritsextrakt, salt, vegetabiliska oljor (kokos, palm), aromer, färgämnen (E153, E120, E100, E141), ytbehandlingsmedel (bivax), stabiliseringsmedel (E471).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1997509-300x300.png",
            "large": "/storage/products/1997509.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Banana Bubs",
        "description": "<p>Banan/gräddkola</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, aromämnen, färgämnen: (E150d, E100), kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/156622-300x300.png",
            "large": "/storage/products/156622.png"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Banana Splits",
        "description": "<p>Fyllig vitchoklad med smak av kola krispig banan.</p>\n<p>Innehållsförteckning: Socker, kakaosmör, torkad banan, HELMJÖLKSPULVER, mjölksocker(LAKTOS), SKUMMJÖLKSPULVER, emulgeringsmedel E322 (SOJALECITIN), naturliga aromer, ytbehandlingsmedel (E414, E904).</p>\n<p>Kan innehålla spår av MANDEL, NÖTTER och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3827741-300x300.png",
            "large": "/storage/products/3827741.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Ananas",
        "description": "<p>Ananas</p>\n<p>Innehållsförteckning: Glukosirap, socker, majsstärkelse, gelatin, syror: citronsyra, aromämnen, vegetabiliska oljor (kokosnöt, palmkärna), glansmedel: bivax, carnaubavax, färger: E100, E133.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2147890-1-300x300.png",
            "large": "/storage/products/2147890-1.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Bubs Cool Cola Skalle",
        "description": "<p>Sur cola</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, vatten, majsstärkelse, surhetsreglerande medel (äppelsyra, natriumcitrat), aromämnen, färgämnen (E150d).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1595204-300x300.png",
            "large": "/storage/products/1595204.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Center",
        "description": "<p>Mjölkchokladpralin med toffeefyllning</p>\n<p>Innehållsförteckning: Socker, glukossirap, kakaosmör, vegetabiliska fetter (palm, shea), HELMJÖLKSPULVER, kakaomassa, SKUMMJÖLKSPULVER, VASSLEPULVER (MJÖLK), salt, aromer (bl.a. vanillin), emulgeringsmedel (SOJALECITIN).</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200423-300x300.png",
            "large": "/storage/products/200423.png"
        },
        "stock_status": "instock",
        "stock_quantity": 13
    },
    {
        "name": "Chokladpopcorn",
        "description": "<p>Innehållsförteckning: Socker, kakaosmör, kakaomassa, MJÖLKSOCKER (LAKTOS), HELMJÖLKSPULVER, majs, VASSLEPULVER (av MJÖLK), kokos- och raps fett, mjölkfett, sirap, emulgeringsmedel (E322), SOJALECITIN, kokosolja, ytbehandlingsmedel, E414 (gummi arabikum).</p>\n<p>Kan innehålla MANDEL, HASSELNÖT, CASHEWNÖT och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3697328-300x300.png",
            "large": "/storage/products/3697328.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Choko Moment",
        "description": "<p>Krispiga wafers och chokladkräm, täckta av härlig mjölkchoklad.</p>\n<p>Innehållsförteckning: MJÖLKCHOKLAD 60% [socker, kakaosmör, kakaomassa, SKUMMJÖLKSPULVER, VASSLEPULVER (MJÖLK), MJÖLKFETT, emulgeringsmedel (SOJALECITIN), arom (vanillin)], VETEMJÖL, vegetabiliska oljor (palm, raps, kokos), socker, VASSLEPULVER (MJÖLK), fettreducerad kakao 2 %, emulgeringsmedel (SOJALECITIN), bakpulver (E 500), salt, arom.</p>\n<p>Kan innehålla ÄGG och NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3149569-300x300.png",
            "large": "/storage/products/3149569.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Cola Rocketz",
        "description": "<p>Fylld brun lakrits med colasmak.</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, VETEMJÖL, surhetsreglerande medel (äppelsyra, citronsyra), helt härdat vegetabiliskt fett (palmkärna, kokos), fuktighetsbevarande medel (glycerol), emulgeringsmedel (mono- och diglycerider av fettsyror), förtjockningsmedel (arabiskt gummi), modifierad majsstärkelse, MALTEXTRAKT FRÅN KORN, aromämne, kakaopulver, sirap, salt, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2502327-300x300.png",
            "large": "/storage/products/2502327.png"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Colanappar",
        "description": "<p>Vingummi med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, karamelliserat socker, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173452-300x300.png",
            "large": "/storage/products/173452.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Daim",
        "description": "<p>Chokladdoppad krokant</p>\n<p>Innehållsförteckning: Socker, palmolja, kakaosmör, kakaomassa, vasslepulver (MJÖLK), SKUMMJÖLKSPULVER, MANDEL(2.9%), SMÖRFETT, vassleprodukt (MJÖLK), sockrad kondenserad SKUMMJÖLK, salt, emulgeringsmedel (SOJALECITIN), aromer.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/144085-300x300.png",
            "large": "/storage/products/144085.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Delicatoboll Mini",
        "description": "<p>Chokladboll med mockasmak täckt med kakaoöverdrag och kokos.</p>\n<p>Innehållsförteckning: Socker, HAVREGRYN, vegetabilisk olja (palm, shea, raps), vatten, kokosflingor, kakaopulver, salt, arom (bl.a. mocka), konserveringsmedel (kaliumsorbat), emulgeringsmedel (vegetabiliskt E471, SOJALECITIN), färgämne (sockerkulör).</p>\n<p>Kan innehålla MJÖLK.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3307531-300x300.png",
            "large": "/storage/products/3307531.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Nöt-Crémespralin Delicatoboll",
        "description": "<p>Chokladpralin med Delicatobollsfyllning.</p>\n<p>Innehållsförteckning: Fyllning: Socker, vegetabiliska oljor och fetter (palm), HAVREGRYN, kokos, kakao, solroslecitin, arom, vanillin, salt. Överdrag: socker, vegetabiliskt fullhärdat fett (palm), VASSLEPULVER, kakao, emulgator (solroslecitin och E492) arom.</p>\n<p>Kan innehålla HASSELNÖTTER och JORDNÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3737777-300x300.png",
            "large": "/storage/products/3737777.png"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Dumle Original",
        "description": "<p>Mjölkchokladöverdragen kola</p>\n<p>Innehållsförteckning: Glukossirap, socker, vegetabiliskt fett (palm), HELMJÖLKSPULVER, kakaosmör, vasslepulver (av MJÖLK), kakaomassa, MJÖLK, SKUMMJÖLKSPULVER, salt, emulgeringsmedel (lecitin, bl.a. SOJA), aromer.</p>\n<p>Kan innehålla NÖTTER, MANDLAR och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200411-300x300.png",
            "large": "/storage/products/200411.png"
        },
        "stock_status": "instock",
        "stock_quantity": 12
    },
    {
        "name": "Fazermint",
        "description": "<p>Chokladkonfekt med mintfyllning</p>\n<p>Innehållsförteckning: Socker, kakaomassa, glukossirap, kakaosmör, MJÖLKFETT, emulgeringsmedel (lecitin, bl.a. SOJA), aromer, enzym (invertas).</p>\n<p>Kan innehålla MJÖLK, NÖTTER, MANDLAR och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200408-300x300.png",
            "large": "/storage/products/200408.png"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Ferrari",
        "description": "<p>Vingummi med hallonsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, modifierad majsstärkelse, gelatin, aromämne, surhetsreglerande medel (citronsyra), färgämne (karmin), vegetabilisk olja (kokos, raps), ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200361-300x300.png",
            "large": "/storage/products/200361.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Ferrari Cola",
        "description": "<p>Vingummi med colasmak.</p>\n<p>Innehållsförteckning: Socker, glukossirap, modifierad majsstärkelse, gelatin, surhetsreglerande medel (citronsyra, mjölksyra), aromämnen, MALTSIRAP FRÅN KORN, vegetabilisk olja (kokos), ytbehandlingsmedel (karnaubavax), färgämne (karmin).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/151398-300x300.png",
            "large": "/storage/products/151398.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "FizzyPop",
        "description": "<p>Sursandad skum med smak av bubbelgum</p>\n<p>Innehållsförteckning: Glukossirap, socker, vatten, gelatin, syra (citronsyra), färgämnen (E170, E120, E133), fullhärdat palmfett, arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/154276-300x300.png",
            "large": "/storage/products/154276.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Fruktnappar",
        "description": "<p>Vingummi med fruktsmaker</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, frukt- och plantkoncentrat: spirulina, safflor, äpple, citron, rättika, sötpotatis, morot, svarta vinbär, hibiskus, invertsockersirap, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173451-300x300.png",
            "large": "/storage/products/173451.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Geisha",
        "description": "<p>Mjölkchoklad med krispig nötnougat</p>\n<p>Innehållsförteckning: Socker, MJÖLK, kakaosmör, HASSELNÖTTER (10%), kakaomassa, HELMJÖLKSPULVER, KÄRNMJÖLKSPULVER, vegetabiliskt fett (palm, shea), VETEMJÖL, majsstärkelse, emulgeringsmedel (lecitin, bl.a. SOJA), salt, aromer.</p>\n<p>Kan innehålla andra NÖTTER och MANDLAR.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200410-300x300.png",
            "large": "/storage/products/200410.png"
        },
        "stock_status": "instock",
        "stock_quantity": 13
    },
    {
        "name": "Geléhallon",
        "description": "<p>Hallon</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, surhetsreglerande medel E330, aromer, färgämne E120.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1506469-300x300.png",
            "large": "/storage/products/1506469.png"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Gröna Grodor",
        "description": "<p>Krusbärssmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, surhetsreglerande medel E330, stabiliseringsmedel E406, vegetabilisk olja (kokosolja, rapsolja), ytbehandlingsmedel E901, arom, färgämnen E141, E160a.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200421-300x300.png",
            "large": "/storage/products/200421.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Guldbamsar",
        "description": "<p>Vingummi med fruktsmaker</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, fruktjuice från koncentrat: äpple, jordgubbar, hallon, apelsin, citron, ananas, syra: citronsyra, frukt- och plantkoncentrat: safflor, spirulina, äpple, fläderbär, apelsin, svarta vinbär, kiwi, citron, aronia, mango, passionsfrukt, vindruva, arom, extrakt av fläderbär, palmolja: ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173457-300x300.png",
            "large": "/storage/products/173457.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Hallon/Lakritsskalle",
        "description": "<p>Hallonlakritsskalle</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, salmiak, lakrits, surhetsreglerande medel (äppelsyra, natriumcitrat), aromämnen, färgämnen (svart morotskoncentrat , E153, E100), salt, kokosolja, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/161229-300x300.png",
            "large": "/storage/products/161229.png"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Hallonbåtar",
        "description": "<p>Hallon</p>\n<p>Innehållsförteckning: Socker, glukossirap, gelatin, surhetsreglerande medel E330, vegetabilisk olja (kokosolja, rapsolja), ytbehandlingsmedel E901, arom, färgämne E120.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1506470-300x300.png",
            "large": "/storage/products/1506470.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Hallonlakritsskalle Skum",
        "description": "<p>Hallonlakritsskalle i Skum.</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, majsstärkelse, vatten, salmiak, lakrits, surhetsreglerande medel (äppelsyra, natriumcitrat), potatisprotein, kokosolja, aromämnen, färgämnen: (svart morotskoncentrat, E153), salt, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/112460-300x300.png",
            "large": "/storage/products/112460.png"
        },
        "stock_status": "instock",
        "stock_quantity": 13
    },
    {
        "name": "Happy Cola Filled",
        "description": "<p>Vingummi och skum med flytande fyllning med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, druvsocker, gelatin, syra: citronsyra, arom, surhetsreglerande medel: trinatriumcitrat, karamelliserat socker, stabiliseringsmedel: karragenan, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/267396-300x300.png",
            "large": "/storage/products/267396.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Hot Lips",
        "description": "<p>Gelégodis med jordgubbssmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, VETESTÄRKELSE, vatten, modifierad majsstärkelse, modifierad potatisstärkelse, syror (E260, E270), fruktjuice koncentrat (svart morot), arom, kokosolja, ytbehandlingsmedel (bivax, karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200413-300x300.png",
            "large": "/storage/products/200413.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Häxvrål",
        "description": "<p>Sockerkanderad fylld lakrits</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, engelsk sirap, VETEMJÖL, rålakrits 3%, ammoniumklorid 3%, modifierad majs- och potatisstärkelse, helt härdat vegetabiliskt fett (palmkärna, kokos), förtjockningsmedel (arabiskt gummi), emulgeringsmedel (mono- och diglycerider av fettsyror), fuktighetsbevarande medel (glycerol), salt, aromämne.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200367-300x300.png",
            "large": "/storage/products/200367.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Jätte Colaflaska",
        "description": "<p>Gelegodis med kolasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, surhetsreglerande medel (citronsyra), färgämne (E150c), smakämnen, vegetabilisk olja (kokosnöt), ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/156610-300x300.png",
            "large": "/storage/products/156610.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Jättenappar Frukt",
        "description": "<p>Vingummi och skum med fruktsmaker</p>\n<p>Innehållsförteckning: Glukossirap, socker, druvsocker, gelatin, syra: citronsyra, frukt- och plantkoncentrat: spirulina, safflor, äpple, citron, rättika, sötpotatis, morot, svarta vinbär, hibiskus, invertsockersirap, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173459-300x300.png",
            "large": "/storage/products/173459.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Kinder Maxi",
        "description": "<p>MJÖLKCHOKLAD MED EN MJÖLKFYLLNING</p>\n<p>Innehållsförteckning: MJÖLKCHOKLAD 39% (socker, HELMJÖLKSPULVER, kakaosmör, kakaomassa, emulgeringsmedel: lecitiner (SOJA), vanillin), socker, SKUMMJÖLKSPULVER, palmolja, SMÖRKONCENTRAT, emulgeringsmedel: lecitiner (SOJA), vanillin.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2102365-300x300.png",
            "large": "/storage/products/2102365.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Kolaskruv Megasize",
        "description": "<p>Den äkta kolasmaken som det smakade förr</p>\n<p>Innehållsförteckning: Glukossirap, VETEMJÖL, socker, vatten, invertsockersirap, salt, fuktighetsbevarande medel (sorbitol), färgämne (E100, E150c), konserveringsmedel (E202), arom, ytbehandlingsmedel (kokosolja, E903).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2625808-300x300.png",
            "large": "/storage/products/2625808.png"
        },
        "stock_status": "instock",
        "stock_quantity": 13
    },
    {
        "name": "Körsbär",
        "description": "<p>Vingummi med körsbärssmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, druvsocker, syra: citronsyra, frukt- och plantkoncentrat: spirulina, safflor, äpple, rättika, sötpotatis, morot, svarta vinbär, hibiskus, invertsockersirap, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173458-300x300.png",
            "large": "/storage/products/173458.png"
        },
        "stock_status": "instock",
        "stock_quantity": 12
    },
    {
        "name": "Lakritsbåtar",
        "description": "<p>Lakrits</p>\n<p>Innehållsförteckning: Socker, glukossirap, gelatin, lakritsextrakt, vegetabilisk olja (kokosolja, rapsolja), ytbehandlingsmedel E901, aromer (anis, vanillin), färgämne E153.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2502321-300x300.png",
            "large": "/storage/products/2502321.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Lys Melk",
        "description": "<p>Mjölkchoklad</p>\n<p>Innehållsförteckning: Socker, kakaosmör, HELMJÖLKSPULVER, kakaomassa, vegetabiliska fetter (palm, shea), VASSLEPULVER (MJÖLK), emulgeringsmedel (SOJALECITIN), salt, arom (bl.a. vanillin)</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200422-300x300.png",
            "large": "/storage/products/200422.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "M&M's Peanut",
        "description": "<p>Mjölkchoklad (48%) doppade jordnötter(24%) med ett krispigt sockerskal</p>\n<p>Innehållsförteckning: Socker, JORDNÖTTER, kakaomassa, SKUMMJÖLKSPULVER, kakaosmör, palmfett, MJÖLKFETT, stärkelse, glukossirap, sheafett, LAKTOS, emulgeringsmedel (SOJALECITIN), stabiliseringsmedel (gummi arabicum), färgämnen (E100, E120, E133, E160a, E160e, E171), dextrin, ytbehandlingsmedel (karnaubavax), palmkärnolja, salt, aromämnen.</p>\n<p>Kan innehålla MANDEL och HASSELNÖT.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/218032-300x300.png",
            "large": "/storage/products/218032.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Majsbollar",
        "description": "<p>Mjölkchoklad och majs</p>\n<p>Innehållsförteckning: Socker, kakaosmör, HELMJÖLKSPULVER, kakaomassa, majs (5 %), emulgeringsmedel (SOJALECITIN), naturlig vanilj arom, ytbehandlingsmedel E904, glukossirap, modifierad tapiokastärkelse, vegetabiliska oljor (kokos, raps) i varierande proportion.</p>\n<p>Kan innehålla HASSELNÖT, CASHEWNÖT, PARANÖT, PEKANNÖT och MANDEL.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200538-300x300.png",
            "large": "/storage/products/200538.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Mandelägg",
        "description": "<p>Rostade mandlar med mjölkchoklad och sockerdragé.</p>\n<p>Innehållsförteckning: Socker, rostade MANDLAR 28%, SÖTMJÖLKSPULVER, kakaosmör, kakaomassa, risstärkelse, förtjockningsmedel (arabisk gummi), emulgeringsmedel (lecithin), färgämnen (karoten, karmin), helt härdat vegetabiliskt fett (palmkärna), vaniljextrakt.</p>\n<p>Kan innehålla spår av andra NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1959558-300x300.png",
            "large": "/storage/products/1959558.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Marabou Mjölkchoklad",
        "description": "<p>Innehållsförteckning: Socker, kakaosmör, kakaomassa, vasslepulver (MJÖLK), SKUMMJÖLKSPULVER, SMÖRFETT, vassleprodukt (MJÖLK), emulgeringsmedel (SOJALECITIN), arom</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/144088-300x300.png",
            "large": "/storage/products/144088.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Mini Mentos jordgubb",
        "description": "<p>Tuggbara ovala pastiller i härlig jordgubbssmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, kokosolja, syra (citronsyra), stärkelse, maltodextrin, naturliga aromämnen, jordgubbsjuice från koncentrat, kakaosmör, emulgeringsmedel (sackarosestrar av fettsyror), förtjockningsmedel (gellangummi, cellulosagummi, gummi arabicum), ytbehandlinsmedel (karnaubavax), färgämne (E162).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3624530-300x300.png",
            "large": "/storage/products/3624530.png"
        },
        "stock_status": "instock",
        "stock_quantity": 7
    },
    {
        "name": "Minidynamit Sur Jordgubb",
        "description": "<p>Innehållsförteckning: Socker, glukos-fruktossirap, VETEMJÖL, vatten, vegetabiliskt fett (kokos), surhetsreglerande medel: citronsyra, äppelsyra, surhetsreglerande: E350, emulgeringsmedel: E471, gelatin (nöt), VETESTÄRKELSE, aromer, konserveringsmedel: E202, innehåller SULFITER, färgämne: E120.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/112871-300x300.png",
            "large": "/storage/products/112871.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Mormors Löständer",
        "description": "<p>Gelegodis med smak av jordgubb.</p>\n<p>Innehållsförteckning: Glukossirap, socker, stärkelse, vatten, gelatin, syror: E330, E270, surhetsregulator: E325, aromer, ytbehandlinsmedel: E901, E903, färgämnen: E120, E171.</p>\n<p>Tillverkat i en fabrik som även hanterar MJÖLK.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200337-300x300.png",
            "large": "/storage/products/200337.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Nougatägg Stanniol",
        "description": "<p>Smak av Nougat och choklad</p>\n<p>Innehållsförteckning: Socker, vegetabiliska fetter (kokos, palmkärn, palm i varierande proportioner), kakaomassa, kakaosmör, HELMJÖLKSPULVER, krispiga flingor (4%) (majsmjöl, rismjöl, socker, VETEMJÖL, kakaopulver, VASSLEPULVER , salt), VASSLEPULVER, magert kakaopulver, HASSELNÖTTER (2,7%), SKUMMJÖLKSPULVER, emulgeringsmedel (SOJALECITIN), arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/2446142-300x300.png",
            "large": "/storage/products/2446142.png"
        },
        "stock_status": "instock",
        "stock_quantity": 11
    },
    {
        "name": "Nöt-Créme",
        "description": "<p>Hasselnötskräm</p>\n<p>Innehållsförteckning: Socker, vegetabiliska oljor och fetter (shea och palm i varierande proportion), HASSELNÖTTER, JORDNÖTTER, kakao, naturlig vaniljarom, emulgator (solroslecitin).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200549-300x300.png",
            "large": "/storage/products/200549.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Nöt-Crémespraliner Cookie Dough",
        "description": "<p>Cookie Dough-kräm</p>\n<p>Innehållsförteckning: Fyllning: Vegetabiliska oljor (palm, raps, shea, kokos) socker, VETEMJÖL, farinsocker, emulgator (solroslecitin och E471), arom, invertsockersirap, salt, SKUMMJÖLKSPULVER, kardemumma, kanel, bakpulver/bikarbonat, sirap, surhetsreglerande medel. Överdrag: Socker, fullhärdat vegetabiliskt fett (palm), VASSLEPULVER, kakao, SKUMMJÖLKSPULVER, emulgator (solroslecitin och E492), arom.</p>\n<p>Kan innehålla JORDNÖTTER och HASSELNÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3378093-300x300.png",
            "large": "/storage/products/3378093.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Pasta Basta Jordgubb",
        "description": "<p>Syrliga remmar med jordgubbssmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, majsstärkelse, fuktighetsbevarande medel: sorbitolsirap, VETEMJÖL, syror: citronsyra, äppelsyra, ytbehandlingsmedel: karnaubavax, emulgeringsmedel: mono- och diglycerider av fettsyror, arom, frukt- och plantkoncentrat: svarta vinbär, fläderbär, aronia, vindruva, safflor, apelsin, citron, extrakt av fläderbär.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/272743-300x300.png",
            "large": "/storage/products/272743.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Pastellfisk",
        "description": "<p>Gelé med fruktsmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, stärkelse, syra (citronsyra), surhetsreglerandemedel (E331), vegetabiliska oljor (kokos, palm), aromer, ytbehandlingsmedel (bivax), färgämnen (E160e, E141, E160a).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200348-300x300.png",
            "large": "/storage/products/200348.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Persikor",
        "description": "<p>Sockrat gelégodis med smak av persika</p>\n<p>Innehållsförteckning: Socker, glukossirap, gelatin, persikojuice från koncentrat (3 %), syra: citronsyra, frukt- och plantkoncentrat: safflor, äpple, citron, rättika, sötpotatis, morot, svarta vinbär, hibiskus, invertsockersirap, arom.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173119-300x300.png",
            "large": "/storage/products/173119.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Pistols Jordgubb",
        "description": "<p>Fruktlakrits med smak av jordgubb.</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, VETEMJÖL (GLUTEN), stärkelse, gelatin, vegetabiliskt fett (palm, kokosnöt), vegetabilisk olja (palm, kokosnöt), syror: E270, E296, E330, aromämnen, surhetsreglerande medel: E325, E331, salt, emulgeringsmedel: E471, fuktighetsbevarande medel: E422, färgämnen: E120, E160c.</p>\n<p>Tillverkat i en fabrik som även hanterar MJÖLK.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/262867-300x300.png",
            "large": "/storage/products/262867.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Polly Original",
        "description": "<p>Dragerat skum med smak av arrak, smörkola, vanilj och choklad</p>\n<p>Innehållsförteckning: Socker, vegetabiliska fetter/oljor (palm, shea, kokos, raps), glukossirap, kakaomassa, invertsockersirap, HELMJÖLKSPULVER, VASSLEPULVER|(MJÖLK), gelatin, emulgeringsmedel (SOJALECITIN, E476), ytbehandlingsmedel (gummi arabicum, shellack), aromer (bl.a. vanillin), förtjockningsmedel (pektin), syra (citronsyra).</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/156907-300x300.png",
            "large": "/storage/products/156907.png"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Punschkottar",
        "description": "<p>Chockodoppad fondang med arrak och romsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, vatten, glukos-fruktossirap, vegetabiliska oljor|(palm, shea), fullhärdat palmfett, VETESTÄRKELSE, kakaopulver, emulgeringsmedel (SOJALECITIN), arom (bl.a. vanillin), ytbehandlingsmedel (bivax).</p>\n<p>Kan innehålla MJÖLK och NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3563806-300x300.png",
            "large": "/storage/products/3563806.png"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Punschpraliner",
        "description": "<p>Chockodoppad fondang med arrak och romsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, fullhärdat palmfett, vegetabiliska oljor (palm, shea), vatten, glukos-fruktossirap, kakaopulver, VETESTÄRKELSE, aromer (bl.a. vanillin), emulgeringsmedel (SOJALECITIN), ytbehandlingmedel (bivax).</p>\n<p>Kan innehålla MJÖLK och NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3563831-300x300.png",
            "large": "/storage/products/3563831.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Konfekta Dragéägg",
        "description": "<p>Fruktsmaker</p>\n<p>Innehållsförteckning: Socker, glukossirap, vatten, gelatin (gris), stärkelse (majs), sötningsmedel (sorbitol E420), surhetsreglerande medel (citronsyra E330, äppelsyra E296),|salt, aromer, färgämnen: E120, E160a, E133.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/236332-300x300.png",
            "large": "/storage/products/236332.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Rabarberbitar",
        "description": "<p>Fylld lakrits med fruktsmak.</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, VETEMJÖL, modifierad majs- och potatisstärkelse, helt härdat vegetabiliskt fett (palmkärna, kokos), fuktighetsbevarande medel (glycerol), emulgeringsmedel (mono- och diglycerider av fettsyror), förtjockningmedel (arabiskt gummi), surhetsreglerande medel (äppelsyra), salt, färgämnen (karmin, kurkumin), aromämnen, vegetabilisk olja (palm, palmkärna, kokos), ytbehandlingsmedel (karnaubavax), antioxidant (askorbinsyra).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200362-300x300.png",
            "large": "/storage/products/200362.png"
        },
        "stock_status": "instock",
        "stock_quantity": 15
    },
    {
        "name": "Riesen",
        "description": "<p>Chokladkola täckt med kraftig mörk choklad (30 %)</p>\n<p>Innehållsförteckning: Glukossirap, socker, kondenserad VASSLE (från MJÖLK), kakaomassa, palmfett, kondenserad SKUMMJÖLK, kakao, fuktighetsbevarande medel: sorbitolsirap, kakaosmör, smörfett, vasslepulver (från mjölk), modifierad stärkelse, emulgeringsmedel: lecitin (SOJA), vaniljextrakt.</p>\n<p>Kan innehålla JORDNÖT, HASSELNÖTTER, MANDEL och andra NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/148011-300x300.png",
            "large": "/storage/products/148011.png"
        },
        "stock_status": "instock",
        "stock_quantity": 11
    },
    {
        "name": "Rollo Kola",
        "description": "<p>Toffé med smak av kola</p>\n<p>Innehållsförteckning: Glukossirap, socker, fullhärdat kokosfett, sockrad kondenserad SKUMMJÖLK, koncentrerat SMÖR, salt, emulgeringsmedel (SOJALECITIN), naturlig arom.</p>\n<p>Kan innehålla JORDNÖTTER, MANDEL och NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200345-300x300.png",
            "large": "/storage/products/200345.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Romerska Bågar",
        "description": "<p>Mjölkchoklad med apelsinsmak</p>\n<p>Innehållsförteckning: Socker, kakaosmör, HELMJÖLKPULVER, kakaomassa, vegetabiliska fetter (palm, shea), VASSLEPULVER (MJÖLK), emulgeringsmedel (SOJALECITIN), aromer (bl.a. vanillin), salt.</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/203502-300x300.png",
            "large": "/storage/products/203502.png"
        },
        "stock_status": "instock",
        "stock_quantity": 12
    },
    {
        "name": "Rotella",
        "description": "<p>Lekfull sötlakrits</p>\n<p>Innehållsförteckning: Mörk sirap, VETEMJÖL, glukossirap, majsstärkelse, rålakrits (3 %), arom, salt, ytbehandlingsmedel: bivax vitt och gult, karnaubavax.</p>\n<p>Kan innehålla MJÖLK.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173454-300x300.png",
            "large": "/storage/products/173454.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Salt Sill",
        "description": "<p>Välkänd fisk i lakrits</p>\n<p>Innehållsförteckning: Socker, glukossirap, stärkelse, ammoniumklorid (salmiak), lakritsextrakt, vegetabiliska oljor (kokos, palm), färgämne (E153), stabiliseringsmedel (E471), arom, ytbehandlingsmedel (bivax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200350-300x300.png",
            "large": "/storage/products/200350.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Salt Vit Chokladlakrits",
        "description": "<p>Saltlakrits och choklad</p>\n<p>Innehållsförteckning: Saltlakrits: (socker, melass, VETEMJÖL, glukossirap, lakritsextrakt, arom (ammoniumklorid), vegetabilisk kokosolja, stabilisator (sorbitol), modifierad potatisstärkelse, färgämne (vegetabiliskt kol), naturlig anis arom), socker, kakaosmör, HELMJÖLKSPULVER, VASSLEPULVER, LAKTOS, emulgeringsmedel (SOJALECITIN), naturlig vanilj arom, lakritspulver.</p>\n<p>Kan innehålla HASSELNÖT, CASHEWNÖT, PARANÖT, PEKANNÖT och MANDEL.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1506559-300x300.png",
            "large": "/storage/products/1506559.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Salta Nappar",
        "description": "<p>Seg saltlakrits</p>\n<p>Innehållsförteckning: Glukossirap, socker, majsstärkelse, mörk sirap, salt, rålakrits (3 %), ammoniumklorid, arom, palmolja, ytbehandlingsmedel: bivax vitt och gult.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173462-300x300.png",
            "large": "/storage/products/173462.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Sandwich",
        "description": "<p>Len vaniljsmak med ett mjukt &amp; luftigt kex med chokladsmak.</p>\n<p>Innehållsförteckning: Socker, veg fett (raps, palm, kokos), VETEMJÖL, glukossirap, vatten, SKUMMJÖLKSPULVER, VASSLE, kakao, natriumkarbonat (E500), salt, arom, emulgeringsmedel (solros).</p>\n<p>Kan innehålla HASSELNÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3588173-300x300.png",
            "large": "/storage/products/3588173.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Skipper's Pipes",
        "description": "<p>Välkänd pipa i lakrits. Garanterat rökfri!</p>\n<p>Innehållsförteckning: Glukossirap, VETEMJÖL, melass, socker, lakritsextrakt, färgämnen (E153, E120), salt, stärkelse (bl.a. VETE), konserveringsmedel (E200), förtjockningsmedel (gummi arabicum), kokosolja, arom, ytbehandlingsmedel (bivax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/947358-300x300.png",
            "large": "/storage/products/947358.png"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Skittles Fruit",
        "description": "<p>Tuggkaramell i ett krispigt sockerskal med syrlig fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, palmfett, syror (E330, E296), dextrin, maltodextrin, aromer, färgämnen (E162, E171, E100, E160a, E132, E133, E163, E160e), modiferad stärkelse, surhetsreglerande medel E331, ytbehandlingsmedel E903.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1506140-300x300.png",
            "large": "/storage/products/1506140.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Snickers Miniatures",
        "description": "<p>Mjölkchoklad med vit nougat (13%), mjuk kola (23%) och rostade jordnötter (19%)</p>\n<p>Innehållsförteckning: Socker, glukossirap, JORDNÖTTER, kakaosmör, SKUMMJÖLKSPULVER, kakaomassa, laktos, solrosolja, MJÖLKFETT, vasslepulver (från MJÖLK), palmfett, salt, emulgeringsmedel (SOJALECITIN), ÄGGVITEPULVER, MJÖLKPROTEIN, naturligt vaniljexstrakt.</p>\n<p>Kan innehålla HASSELNÖT.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200356-300x300.png",
            "large": "/storage/products/200356.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Sockerbitar Original",
        "description": "<p>Skum med vaniljsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, invertsockersirap, gelatin, vegetabiliska oljor (kokos, raps), ytbehandlingsmedel (karnaubavax), arom (bl.a. vanillin).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200529-300x300.png",
            "large": "/storage/products/200529.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Sour Winegums",
        "description": "<p>Sour Winegums i fruktsmaker</p>\n<p>Innehållsförteckning: Glukossirap (innehåller SULFITER), socker, stärkelse, gelatin, syror (äppelsyra, ättiksyra), färgämnen (antocyaner, vegetabilisk karbon, paprikaextrakt, lutein, kurkumin), surhetsreglerande medel (kalciumcitrater), palmolja, aromer.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200336-300x300.png",
            "large": "/storage/products/200336.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Stora Colaflaskor",
        "description": "<p>Gelé med colasmak</p>\n<p>Innehållsförteckning: Glukossirap, socker, stärkelse, syra (citronsyra), arom, vegetabiliska oljor (kokos, raps), färgämne (E150c), ytbehandlingsmedel (bivax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200340-300x300.png",
            "large": "/storage/products/200340.png"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Stora Hjärtan",
        "description": "<p>Stora Hjärtan som smakar jordgubb</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, surhetsreglerande medel E330, stabiliseringsmedel E406, vegetabilisk olja (kokosolja, rapsolja), ytbehandlingsmedel E901, färgämne E120, arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/157273-300x300.png",
            "large": "/storage/products/157273.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Stora Kolaskruvar",
        "description": "<p>Lakrits med kolasmak.</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, VETEMJÖL, socker, VETESTÄRKELSE, modifierad potatisstärkelse, emulgeringsmedel (mono- och diglycerider av fettsyror), fuktighetsbevarande medel (glycerol), helt härdat vegetabiliskt fett (palmkärna, kokos), salt, aromämnen, vegetabilisk olja (kokos, raps), ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/1057407-300x300.png",
            "large": "/storage/products/1057407.png"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Stora Mjuka Blå",
        "description": "<p>Kolakula med smak av blåhallon.</p>\n<p>Innehållsförteckning: Socker, glukossirap, full härdat veg. fett (kokosnöt), dextros, fuktighetsbevarande medel: sorbitols, surhetsreglerande medel: citronsyra, gelatin (gris), aromämnen, stabiliseringsmedel: gummi arabicum, emulgeringsmedel: E473, färgämne: E133.</p>\n<p>Kan innehålla MJÖLK.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/116656-300x300.png",
            "large": "/storage/products/116656.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Stora Nappar Hallon & Lakrits",
        "description": "<p>Vingummi med smak av Hallon och lakrits samt ett skum med smak av citrus.</p>\n<p>Innehållsförteckning: Glukossirap, socker, druvsocker, gelatin, rålakrits, syra (citronsyra), ammoniumklorid, arom, frukt- och plantkoncentrat (rättika, sötpotatis, morot, safflor, svarta vinbär, hibiskus), invertsockersirap, palmolja, ytbehandlingsmedel (bivax vitt och gult), karnaubavax.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3831484-300x300.png",
            "large": "/storage/products/3831484.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Stora Råttor",
        "description": "<p>Stor råttor i fyra olika fruktsmaker</p>\n<p>Innehållsförteckning: Glukossirap, socker, gelatin, surhetsreglerande medel E330, vegetabilisk olja (kokosolja, rapsolja), ytbehandlingsmedel E901, aromer, färgämnen E120, E141, E160a.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/129896-300x300.png",
            "large": "/storage/products/129896.png"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Stora Surskallar",
        "description": "<p>Stora surskallar med fruktsmak</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, vatten, majsstärkelse, gelatin, surhetsreglerande medel (äppelsyra, natriumcitrat), aromämnen, färgämnen: E100, E120.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/177188-300x300.png",
            "large": "/storage/products/177188.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Sur Violbanan",
        "description": "<p>Sursockrad viol</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, vatten, gelatin, surhetsreglerande medel (citronsyra, äpplesyra), aromer, färgämne (E153).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3827548-300x300.png",
            "large": "/storage/products/3827548.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Sura Colanappar",
        "description": "<p>Sursockrad gelé med colasmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, VETESTÄRKELSE, vatten, modifierad majsstärkelse, syror (E270, E296, E330, E350), modifierad potatisstärkelse, surhetsreglerande medel (natriumvätekarbonat), KORNMALTEXTRAKT, arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/161560-300x300.png",
            "large": "/storage/products/161560.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Sweethearts",
        "description": "<p>Skum och vingummi med jordgubbssmak.</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, gelatin, surhetsreglerande medel (citronsyra), aromämnen, färgämne (karmin), vegetabilisk olja (kokos), ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/203997-300x300.png",
            "large": "/storage/products/203997.png"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Syrliga Happy Chews",
        "description": "<p>Dragérad kola med fruktsmaker och syrligt pulver</p>\n<p>Innehållsförteckning: Socker, glukossirap, palmfett, fuktighetsbevarande medel: sorbitolsirap, syra: citronsyra, gelatin, frukt- och plantkoncentrat: safflor, citron, spirulina, rättika, svarta vinbär, morot, äpple, surhetsreglerande medel: natriumvätekarbonat, arom, klumpförebyggande medel: talk, ytbehandlingsmedel: bivax vitt och gult, invertsockersirap.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/173450-300x300.png",
            "large": "/storage/products/173450.png"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Tennis XL",
        "description": "<p>Vingummi med fruktsmak.</p>\n<p>Innehållsförteckning: Socker, glukossirap, gelatin, surhetsreglerande medel (citronsyra), aromämnen, rålakrits, vegetabilisk olja (kokos, raps), ytbehandlingsmedel (karnaubavax), färgämnen (karmin, vegetabilisk kol, kurkumin, klorofyllkopparkomplex).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200357-300x300.png",
            "large": "/storage/products/200357.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Tuttifrutti Passion",
        "description": "<p>Gelé med tropiska smaker</p>\n<p>Innehållsförteckning: Socker, glukossirap, majsstärkelse, surhetsreglerande medel (E270, E325), naturliga aromer, färgande livsmedel (koncentrat av svart morot, safflor, och spirulina, extrakt av paprikaolja), ytbehandlingsmedel (E903), färgämne (extrakt av antosyaner).</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/237158-300x300.png",
            "large": "/storage/products/237158.png"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Tuttifrutti Rings",
        "description": "<p>Exotiska fruktringar</p>\n<p>Innehållsförteckning: Glukossirap, socker, majsstärkelse, modifierad stärkelse, surhetsreglerande medel (E270, E325), färgande livsmedel (koncentrat av svart morot, batat, morot, äpple och safflor), naturliga aromer.</p>\n<p>Kan innehålla VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/113195-300x300.png",
            "large": "/storage/products/113195.png"
        },
        "stock_status": "instock",
        "stock_quantity": 7
    },
    {
        "name": "Twix Miniatures",
        "description": "<p>Twix Miniatures</p>\n<p>Kex (26%) och mjuk kola (30%), överdragen med mjölkchoklad (39%)</p>\n<p>Innehållsförteckning: Socker, glukossirap, vetemjöl, palmfett, kakaosmör, SKUMMJÖLKSPULVER, kakaomassa, laktos, mjölkfett, vasslepulver (från MJÖLK), fettreducerat kakaopulver, emulgeringsmedel (SOJALECITIN), salt, bakpulver (E500), naturligt vaniljexstrakt.</p>\n<p>Kan innehålla HASSELNÖT, MANDEL, KORN och HAVRE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200533-300x300.png",
            "large": "/storage/products/200533.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Walker's Liquorice Toffee",
        "description": "<p>Walker's Lakrits Toffee</p>\n<p>Innehållsförteckning: Glukos, socker, sötad kondenserad MJÖLK 21%, veg olja (palmolja), svart sirap 5%, färgämnen veg.kol (E153), lakritsextrakt, salt, emulgeringsmedel (E471), anisolja.</p>\n<p>Kan innehålla NÖTTER.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/120091-300x300.png",
            "large": "/storage/products/120091.png"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "Vattenmeloner",
        "description": "<p>Sockrad gelé med melonsmak</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukos-fruktossirap, stärkelse, syror (citronsyra, vinsyra), arom, färgämne (E120).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/157315-300x300.png",
            "large": "/storage/products/157315.png"
        },
        "stock_status": "instock",
        "stock_quantity": 15
    },
    {
        "name": "Winegums",
        "description": "<p>Winegums</p>\n<p>Innehållsförteckning: Glukossirap (innehåller SULFITER), socker, stärkelse, gelatin, syror (äppelsyra, ättiksyra), färgämnen (antocyaner, vegetabilisk karbon, paprikaextrakt, lutein, kurkumin), aromer, vegetabiliska oljor (palmkärn, kokos, solros), ytbehandlingsmedel (karnaubavax).</p>\n<p>Kan innehålle VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 12,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200335-300x300.png",
            "large": "/storage/products/200335.png"
        },
        "stock_status": "instock",
        "stock_quantity": 2
    },
    {
        "name": "Violpistoler",
        "description": "<p>Gelé med violsmak.</p>\n<p>Innehållsförteckning: Socker, glukossirap, vatten, gelatin (gris), aromer, surhetsreglerande medel (äppelsyra E296, citronsyra E330), färgämnen E120, E133.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/200418-300x300.png",
            "large": "/storage/products/200418.png"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Vit Chokladhallonbåt",
        "description": "<p>Vit Chokladhallonbåt</p>\n<p>Innehållsförteckning: Socker, glukossirap, kakaosmör, vatten, HELMJÖLKSPULVER, socker (granulat), gelatin, surhetsreglerande medel (E330), vegetabilisk fett (kokos,raps), ytbehandlingsmedel E414, emulgeringsmedel (SOJALECITIN E476), aromer, färgämnen E120, E153, salt.</p>\n<p>Kan innehålla MANDEL, HASSELNÖT, CASHEWNÖT och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 9,
        "images": {
            "thumbnail": "/storage/products/thumbnails/3697331-300x300.png",
            "large": "/storage/products/3697331.png"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Zoo Original",
        "description": "<p>Gelé med smak av tuttifrutti</p>\n<p>Innehållsförteckning: Socker, glukossirap, gelatin, modifierad stärkelse, syra (E270), arom, vegetabiliska oljor (kokos, palm), ytbehandlingsmedel (karnaubavax), färgämnen (E120, E160a).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/203114-300x300.png",
            "large": "/storage/products/203114.png"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Marsipanägg",
        "description": "<p>Anthon Bergs Marsipanägg</p>\n<p>Ingredienser<strong>:</strong> Socker,<strong> MANDLAR </strong>14%, kakaomassa, aprikoskärnor, glukossirap, <strong>MJÖLKSOCKER</strong>, kakaosmör,<strong> SÖTMJÖLKSPULVER</strong>, förtjockningsmedel (arabiskt gummi), färgämnen (titandioxid, karmin, karoten, klorofyllkopparkomplex), emulgeringsmedel (rapslecithin), konserveringsmedel (sorbinsyra), härdat vegetabiliskt fett (palmkärnolja).</p>\n<p>Kan innehålla <strong>NÖTTER</strong>.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/marsipanägg-300x300.jpg",
            "large": "/storage/products/marsipanägg.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Stor Sur Smultron",
        "description": "<p>Fylld lakrits med smultronsmak.</p>\n<p>Ingredienser: Socker, glukos-fruktossirap, <strong>VETEMJÖL (GLUTEN)</strong>, modifierad majs- och potatisstärkelse, risstärkelse, helt härdat vegetabiliskt fett (palmkärna, kokos), fuktighetsbevarande medel (glycerol), surhetsreglerande medel (äppelsyra, citronsyra), förtjockningsmedel (arabisk gummi), emulgeringsmedel (mono- och diglycerider av fettsyror), färgämne (karmin, titandioxid), aromämne, salt, vegetabilisk olja (kokos, raps), ytbehandlingsmedel (karnaubavax), antioxidant (askorbinsyra).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/stor_sur_smultron-300x300.jpg",
            "large": "/storage/products/stor_sur_smultron.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "American Peanut & Salty Caramel",
        "description": "<p>En underbar kombination av salt kola toffé, härlig jordnöt med touch av nougat i en mjölkchoklad.</p>\n<p>Ingredienser:  Karamellfyllning [glukossirap, sötad kondenserad <strong>MJÖLK</strong>, inverterat socker, kokosfett, socker, fuktighetsbevarande medel: glycerol, <strong>MJÖLKFETT</strong>, rapsolja, salt, bränt socker, surhetsreglerande medel: natriumfosfater, emulgeringsmedel: lecitin (från <strong>SOJA</strong>), förtjockningsmedel: karragenan, naturliga aromer], socker, kakaosmör, <strong>JORDNÖTTER</strong> 7,7%, <strong>MJÖLKPULVER</strong>, bitar av <strong>JORDNÖTTER</strong> 6%, kakaomassa, <strong>SKUMMJÖLKSPULVER</strong>, vegetabiliskt fett (palm, shea), vasslepulver (från <strong>MJÖLK</strong>), salt, emulgeringsmedel: lecitin (från <strong>SOJA</strong>), vaniljextrakt, aromer.</p>\n<p>Kan innehålla andra <strong>NÖTTER, ÄGG</strong> och spannmål som innehåller <strong>GLUTEN.</strong></p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/american_peanut-300x300.jpg",
            "large": "/storage/products/american_peanut.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Sura Vattenmelonnappar",
        "description": "<p>Sursockrad gelé med vattenmelon</p>\n<p>Innehållsförteckning: Socker, glukossirap, <strong>VETESTÄRKELSE</strong>, vatten, modifierad majsstärkelse, syror (E270, E296, E330, E350), modifierad potatisstärkelse, färgämne (koncentrat från spirulina, safflor), arom, fruktjuice koncentrat (svart morot).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/sur_vattenmelonnapp-300x300.jpg",
            "large": "/storage/products/sur_vattenmelonnapp.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "KitKat",
        "description": "<p>Choklad med kex.</p>\n<p>Innehållsförteckning: Socker, SKUMMJÖLKSPULVER, kakaosmör, VETEMJÖL, vegetabiliskt fett (palm), kakaomassa, SMÖROLJA (MJÖLK), VASSLEPULVER (MJÖLK), fettreducerad kakaopulver, emulgeringsmedel (lecitin), aromer, salt, jäsningsmedel (natriumbikarbonat). Minst 29% kakao i choklad.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/kitkat-300x300.jpg",
            "large": "/storage/products/kitkat.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Delicato Punschrulle Mini",
        "description": "<p>Delicato Punschrulle Mini</p>\n<p>Innehållsförteckning: Socker, vegetabilisk olja (palm, raps, shea, kokos, solros), <strong>MANDEL</strong>, <strong>HAVREGRYN</strong>, <strong>VETEMJÖL</strong>, vatten, kakaopulver, glukossirap, <strong>ÄGG</strong>, <strong>HASSELNÖTTER</strong>, kokosflingor, fullhärdad palmolja, salt, <strong>SKUMMJÖLKSPULVER</strong>, arom (bl.a. arrak), stärkelse, emulgeringsmedel (<strong>SOJALECITIN</strong>, solroslecitin, vegetabiliskt E471), konserveringsmedel (kaliumsorbat), färgämne (karotener, E133).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/dammsugare-300x300.jpg",
            "large": "/storage/products/dammsugare.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Cadillacs",
        "description": "<p>En holländsk geléklassiker med smak av jordgubb, körsbär och svarta vinbär.</p>\n<p>Innehållsförteckning: Glukos-fruktossirap, socker, modifierad stärkelse, gelatin, syror (äppelsyra, citronsyra, ättiksyra), äppeljuice från koncentrat, naturliga aromer, koncentrat (sötpotatis, morot, rädisa, äpple, svarta vinbär), surhetsreglerande medel (natriummalater), ytbehandlingsmedel (karnaubavax), antioxidationsmedel (askorbinsyra).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/cadillac-300x300.jpg",
            "large": "/storage/products/cadillac.jpg"
        },
        "stock_status": "outofstock",
        "stock_quantity": 0
    },
    {
        "name": "Kinder Bueno White Mini",
        "description": "<p><strong>Kinder Bueno White Mini </strong>är<strong> spröda kex,</strong> fyllda <strong>med mjölk</strong>- och <strong>hasselnötskräm,</strong> doppade i <strong>vit choklad.</strong></p>\n<p>Ingredienser: Vit choklad 29,5% (kakaosmör, socker, SKUMMJÖLKSPULVER, SMÖRKONCENTRAT, emulgeringsmedel (SOJALECITIN), vanillin), socker, palmolja, VETEMJÖL, HASSELNÖTTER (10,8%), SKUMMJÖLKSPULVER (8,5%), HELMJÖLKSPULVER (5,5 %), MJÖLKCHOKLAD (3,5%) (socker, kakaosmör, kakaomassa, SKUMMJÖLKSPULVER, SMÖRKONCENTRAT, emulgeringsmedel (SOJALECITIN), vanillin), fettreducerat kakaopulver, emulgeringsmedel (SOJALECITIN), bakpulver (natriumvätekarbonat, ammoniumvätekarbonat), salt, vanillin.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/kinder_bueno_white_mini-300x300.jpg",
            "large": "/storage/products/kinder_bueno_white_mini.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Werther's Original Creamy Filling",
        "description": "<p>Werther's Original fylld med en krämig fyllning.</p>\n<p>Innehållsförteckning: Socker, glukossirap, glukosfruktossirap, GRÄDDE (7%), kondenserad VASSLE (från MJÖLK), SMÖR (4,5%), kondenserad SKUMMJÖLK, rörsockersirap, salt, SMÖRFETT, VASSLEPULVER (från MJÖLK), emulgeringsmedel: lecitin (SOJA), arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 4,
        "images": {
            "thumbnail": "/storage/products/thumbnails/wertherscreamy-300x300.jpg",
            "large": "/storage/products/wertherscreamy.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 7
    },
    {
        "name": "Fazer Marianne Drops",
        "description": "<p>Underbara Marianne drops med tydlig smak av mint.</p>\n<p>Innehållsförteckning: Socker, kakaomassa, kakaosmör, vegetabiliskt fett (palm, shea), förtjockningsmedel (E414), emulgeringsmedel (SOJALECITIN), färgämne (E171), arom, ytbehandlingsmedel (E903, E901, E904). Kan innehålla MJÖLK och VETE.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/marianne-300x300.jpg",
            "large": "/storage/products/marianne.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Aroma Påskharen Bunny",
        "description": "<p>Skum med smak av frukt.</p>\n<p>Innehållsförteckning: Socker, glukos-fruktossirap, gelatin, vegetabilisk olja (kokosolja), ytbehandlingsmedel E903, surhetsreglerande medel (E330), färgämne (E120, E160a), arom.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 3,
        "images": {
            "thumbnail": "/storage/products/thumbnails/paskhare-1-300x300.jpg",
            "large": "/storage/products/paskhare-1.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 7
    },
    {
        "name": "Fizzybubble ägg",
        "description": "<p>Skumägg med smak av fizzybubble.</p>\n<p>Innehållsförteckning: Socker, glukossirap, stärkelse (majs), vatten, surhetsreglerande medel (E296, E270, E330), aromer, färgämnen (E171, E120, E133).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/fizzyagg-300x300.jpg",
            "large": "/storage/products/fizzyagg.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 1
    },
    {
        "name": "Carletti Skumbanan",
        "description": "<p>Skumbanan med chokladöverdrag. </p>\n<p>Ingredienser: Glukossirap, socker, vatten, kakaomassa, kakaosmör, gelatin, stabiliseringsmedel (E420), skummedel (MJÖLPROTEIN), emulgeringsmedel (E322), arom, färgämnen (E160a, E101). Kan innehålla spår av JORDNÖTTER. </p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 8,
        "images": {
            "thumbnail": "/storage/products/thumbnails/Carletti-300x300.jpg",
            "large": "/storage/products/Carletti.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Nöt-crème kanelbulle",
        "description": "<p>Nöt-Crème finns nu i en ny mumsig smak, kanelbulle! </p>\n<p>Ingredienser: Socker, Vegetabilisk olja och fett (raps, fullhärdad kokos, fullhärdad raps), JORDNÖTTER, MANDEL, kanel, vanillin, emulgator (solroslecitin), salt, aromer. Överdrag: Socker, vegetabiliskt fullhärdat fett (palm), VASSLEPULVER, kakao, emulgator (solroslecitin och E492), arom. Kan innehålla HASSELNÖTTER och GLUTEN</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/notcremekanelbulle-300x300.jpg",
            "large": "/storage/products/notcremekanelbulle.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    },
    {
        "name": "Ferrari päron",
        "description": "<p>Supersmarrig och snabb Ferraribil med smak av päron. </p>\n<p>Ingredienser: Socker, glukossirap, modifierad majsstärkelse, gelatin, surhetsreglerande medel (citronsyra), aromämne, färgämne (klorofyll-kopparkomplex, kurkumin), vegetabilisk olja (kokos, raps), ytbehandlingsmedel (karnaubavax). </p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 10,
        "images": {
            "thumbnail": "/storage/products/thumbnails/Ferrariparon-300x300.jpg",
            "large": "/storage/products/Ferrariparon.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Jätte Fizzyflaskan",
        "description": "<p>Den populära Fizzyflaskan finns nu i en större variant, supergod!</p>\n<p>Ingredienser: Glukossirap, socker, gelatin, surhetsreglerande medel (citronsyra, äppelsyra, natriummalat), färgämne (E120, E133, E171), aromer, ytbehandlingsmedel (karnaubavax).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 11,
        "images": {
            "thumbnail": "/storage/products/thumbnails/fizzy-300x300.jpg",
            "large": "/storage/products/fizzy.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Ritter sport Mini whole hazelnuts",
        "description": "<p>Ritter sport i mini-format med smak av hela hasselnötter.</p>\n<p>Innehållsförteckning: Socker, HASSELNÖTTER, kakaosmör, kakaomassa, HELMJÖLKSPULVER, LAKTOS, SKUMMJÖLKSPULVER, SMÖRFETT, emulgeringsmedel (SOJALECITIN). Kan innehålla spår av JORDNÖTTER, andra NÖTTER, spannmål innehållande GLUTEN och ÄGG.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/ritter-helnot-300x300.jpg",
            "large": "/storage/products/ritter-helnot.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 6
    },
    {
        "name": "Ritter sport Mini marzipan",
        "description": "<p>Ritter sport i mini-format med smak av marsipan.</p>\n<p>Innehållsförteckning: Socker, kakaomassa, MANDEL (15 %), kakaosmör, invertsockersirap, emulgeringsmedel (SOJALECITIN), fuktighetsbevarande medel (invertas). Kan innehålla spår av JORDNÖTTER, andra NÖTTER, spannmål innehållande GLUTEN och ÄGG.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 7,
        "images": {
            "thumbnail": "/storage/products/thumbnails/ritter-marsipan-300x300.jpg",
            "large": "/storage/products/ritter-marsipan.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "Nöt-Crème Mandel Lönnsirap",
        "description": "<p>Nöt-Crème finns nu i en ny mumsig smak, Mandel &amp; Lönnsirap!</p>\n<p>Ingredienser: Fyllning: Socker, Vegetabilisk olja och fett (fullhärdad kokos och raps), MANDEL, emulgator (solroslecitin), salt, arom, vanillin. Överdrag: Socker, vegetabiliskt fullhärdat fett (palm), VASSLEPULVER, kakao, emulgator (solroslecitin och E492), arom. Kan innehålla HASSELNÖTTER, JORDNÖTTER, MANDEL och GLUTEN.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/lonnsirap-300x300.jpg",
            "large": "/storage/products/lonnsirap.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 10
    },
    {
        "name": "Nöt-Crème Salmiak Svartvinbär",
        "description": "<p>Nöt-Crème finns nu i en ny mumsig smak, Salmiak Svartvinbär!</p>\n<p>Ingredienser: Fyllning: Socker, Vegetabilisk olja och fett (fullhärdad kokos och raps), kokos, salmiaksalt, arom, färgämne, emulgator (solroslecitin), vanillin. Överdrag: Socker, vegetabiliskt fullhärdat fett (palm), VASSLEPULVER, kakao, emulgator (solroslecitin och E492), arom. Kan innehålla HASSELNÖTTER, JORDNÖTTER, MANDEL och GLUTEN.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/salmiak-svartvinbar-300x300.jpg",
            "large": "/storage/products/salmiak-svartvinbar.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 5
    },
    {
        "name": "Dumle banan",
        "description": "<p>Dumle är verkligen fantastiskt gott och nu kommer den tillbaka till vår lösvikt i smaken banan!</p>\n<p>Ingredienser: Glukossirap, socker, vegetabiliskt fett (palm), HELMJÖLKSPULVER, kakaosmör, VASSLEPULVER (av MJÖLK), kakaomassa, SKUMMJÖLKSPULVER, salt, emulgeringsmedel (SOJALECITIN), aromer (bl.a. banan). Kan innehålla NÖTTER, MANDLAR och SPANNMÅL som innehåller GLUTEN.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/dumle-banan-300x300.jpg",
            "large": "/storage/products/dumle-banan.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 8
    },
    {
        "name": "Nöt-Crème Mango Cheesecake",
        "description": "<p>Nöt-Crème finns nu i en ny mumsig smak, Mango Cheesecake!</p>\n<p>Ingredienser: Fyllning: Socker, vegetabiliska oljor och fetter (shea, palm, raps, kokos i varierande proportion), VETEMJÖL, naturliga aromer, emulgator (solroslecitin och E471), surhetsreglerande medel (E300), invertsockersirap, salt, SKUMMJÖLKSPULVER, vanillin, kardemumma, kanel, bakpulver/bikarbonat, sirap, smakförstärkare (E631, E627)<br />\nÖverdrag: Socker, vegetabiliskt fullhärdat fett (palm), VASSLEPULVER, kakao, emulgator (solroslecitin och E492), arom. Kan innehålla spår av HASSELNÖTTER, JORDNÖTTER och MANDEL.</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 6,
        "images": {
            "thumbnail": "/storage/products/thumbnails/cheesecake_mango-300x300.jpg",
            "large": "/storage/products/cheesecake_mango.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 9
    },
    {
        "name": "S-Märke Hallonsura",
        "description": "<p>Sursockrad gelé med hallonsur.</p>\n<p>Innehållsförteckning: Glukos, socker, gelatin (nöt), surhetsreglerande medel(äppelsyra, natriumcitrat), aromer, färgämnen (karmin).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/s-marke-hallon-300x300.jpg",
            "large": "/storage/products/s-marke-hallon.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 4
    },
    {
        "name": "S-Märke Colasura",
        "description": "<p>Sursockrad gelé med colasur.</p>\n<p>Innehållsförteckning: Socker, glukos, gelatin (nöt), surhetsreglerande medel(äppelsyra, natriumcitrat), aromer, färgämnen(karmin, sockerkulör).</p>\n<p><em>Alla priser är per skopa.</em></p>\n",
        "price": 5,
        "images": {
            "thumbnail": "/storage/products/thumbnails/s-marke-cola-300x300.jpg",
            "large": "/storage/products/s-marke-cola.jpg"
        },
        "stock_status": "instock",
        "stock_quantity": 3
    }
]
*/