import React from "react";
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import { AcaoProps } from "../../Interfaces/AcaoProps.ts";

const AcaoDisplay: React.FC<AcaoProps> = ({
    logourl,
    symbol,
    shortName,
    currency,
    regularMarketPrice,
    regularMarketDayRange,
    regularMarketDayHigh,
    onToggleFavorite,
    isFavorite,
}) => {
    return (
        <div className="p-8 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col space-y-6 max-w-lg w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-6 w-3/4">
                    <img
                        src={logourl}
                        alt={shortName}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <h2 className="text-3xl font-semibold truncate">{symbol}</h2>
                </div>
                <div
                    onClick={() => onToggleFavorite(symbol)}
                    className="cursor-pointer text-gray-400 hover:text-yellow-500 transition duration-200 flex items-center justify-center w-12 h-12"
                >
                    {isFavorite ? (
                        <Star fontSize="inherit" />
                    ) : (
                        <StarBorder fontSize="inherit" />
                    )}
                </div>
            </div>
            <div className="space-y-4">
                <p className="text-lg"><strong>Nome:</strong> {shortName}</p>
                <p className="text-lg"><strong>Moeda:</strong> {currency}</p>
                <p className="text-lg"><strong>Preço Atual:</strong> {regularMarketPrice?.toFixed(2)} R$</p>
                <p className="text-lg"><strong>Variação do Dia:</strong> {regularMarketDayRange} R$</p>
                <p className="text-lg"><strong>Maior Preço Hoje:</strong> {regularMarketDayHigh} R$</p>
            </div>
        </div>
    );
};

export default AcaoDisplay;
