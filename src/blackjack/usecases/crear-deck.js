import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array} Retorna un Nuevo Deck de Cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) throw new Error('Tipos de Carta es Obligatorio')

    if ( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error('Tipos de Carta es Obligatorio')

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return _.shuffle( deck );
}