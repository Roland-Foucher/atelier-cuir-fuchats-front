import sacRouge from '../assets/sacRouge/Petit-sac-rouge-rond-veau-dessus.jpeg'
import sacMarron from '../assets/sacPascale/Sac-cuir-artisanal-marron-pascale-devant.jpeg'
import sacCarreMarron from '../assets/sacCarreMarron/sac-cuir-artisanal-rectangle-marron.jpeg'
import cartableMarron from '../assets/cartableMarronClair/cartable-cuir-marron-clair.jpeg'
import sacocheMarron from '../assets/sacocheMarron/sacoche-homme-cuir-marron-artisanat-fuchats.jpeg'

export const itemToSale = [
	{
		name: 'sac en cuir de veau rouge',
		category: 'sac',
		id: '1',
		cover: sacRouge,
		price: 70,
		vendu: false,
		fullName : 'Petit sac à main en cuir de veau rouge',
		comment : 'Taille : largeur 21cm, hauteur 15 cm, profondeur 5,5 cm./n Petit sac rouge vif, de forme arrondie, en cuir de veau souple et léger. On peut y glisser son téléphone, son porte-monnaie, et dans la poche intérieur plaquée, ses clés ou ses cartes. /n Fermeture à glissière sur le dessus. /n Bandoulière réglable jusqu\'à 115 cm.'
	},
    {
		name: 'sac en cuir marron',
		category: 'sac',
		id: '2',
		cover: sacMarron,
		price: 250,
		vendu: true,
		fullName : 'Sac en cuir Pascale marron',
		comment : 'Taille : largeur 33 cm, hauteur 32 cm, profondeur 9 cm /n Grand sac en cuir à tannage végétal rigide. Peut se porter en sac à dos ou bandoulière grâce à sa bandoulière amovible et réglable en longueur, et à ses bretelles également amovibles.  /n Une poche extérieure de 2 cm d\'épaisseur. /n Entièrement cousu main. Motifs sur le devant réalisés à l\'aide de matoirs.'
	},
	{
		name: 'sac carré à tanage végétal',
		category: 'sac',
		id: '3',
		cover: sacCarreMarron,
		vendu: false,
		price: 220,
		fullName : 'Sac Michèle carré marron en cuir à tannage végétal',
		comment : 'Taille : largeur 28 cm, hauteur 25 cm, profondeur 9 cm. </b> Grand sac à main style sacoche, en cuir à tannage végétal. Une poche intérieure plaquée en cuir souple. Bandoulière réglable en longueur. /n Entièrement cousu main. Motifs sur le devant réalisés à l\'aide de matoirs.'
	},
	{
		name: 'Cartable en cuir marron clair',
		category: 'cartable',
		id: '4',
		cover: cartableMarron,
		price: 220,
		vendu: false,
		fullName : 'Cartable en cuir marron clair',
		comment : 'Cartable en cuir, entièrement cousu main. /n Sa bandoulière amovible grâce à des mousquetons est réglable en longueur. /n Il possède une poche extérieure, et 2 compartiments à soufflet intérieures. /n Dimensions : hauteur 30 cm, largeur 38 cm, profondeur 12 cm (2 compartiments de 6 cm)'
	},
	{
		name: 'Sacoche homme marron',
		category: 'cartable',
		id: '5',
		cover: sacocheMarron,
		price: 110,
		vendu: false,
		fullName : 'Sacoche homme marron',
		comment : 'Sacoche en cuir à tannage végétal d\'environ 2mm d\'épaisseur, entièrement cousue main. /n Légère, elle pèse moins de 500 g. Sa bandoulière est réglable en longueur jusqu\'à 140 cm. /n Pratique, elle possède une poche plaquée intérieure, et une poche à soufflet extérieure. /n Sa fermeture par tourniqué est en laiton vieilli. /n Dimensions : hauteur 22 cm, largeur 18 cm, profondeur 8 cm /n Poche frontale : hauteur 17 cm, largeur 14 cm, profondeur 3 cm'
	},


]