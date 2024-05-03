const Utils = {
    calculateNumber(type, a, b) {
        switch (type) {
            case 'SUM':
                return numA + numB;
            case 'SUBTRACT':
                return numA - numB;
            case 'DIVIDE':
                if (numB === 0) {
                    return 'Error';
                }
                return numA / numB;
            default:
                return 'Error';
            }
        }
    };

module.exports = Utils;
