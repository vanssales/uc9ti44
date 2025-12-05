function validaEmailTelefone(tipo, valor) {
    if (tipo === "email") {
        if (!valor) return false;
        if (valor.includes("@") && valor.includes(".")) return true;
        return false;
    }

    if (tipo === "telefone") {
        if (!valor) return false;
        const numeros = valor.replace(/\D/g, "");
        if (numeros.length >= 8 && numeros.length <= 11) return true;
        return false;
    }

    return false;
}

module.exports = { validaEmailTelefone };
