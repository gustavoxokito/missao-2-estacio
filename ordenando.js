const swap = (vetor, posi1, posi2) => {

    //Verificar se as posições são validas
    if (posi1 < 0 || posi1 >= vetor.length || posi2 < 0 || posi2 >= vetor.length) {
        console.log("Posições inválidas.");
        return vetor;
    }

    // Troca os valores nas posições especificas
    let temp = vetor[posi1];
    vetor[posi1] = vetor[posi2];
    vetor[posi2] = temp;
    return vetor;
}

const shuffle = (vetor, quantidade_shuffle) => {
    // Clone do vetor para não modificar o original
    let novoVetor = []

    //Enquanto houver elementos para embaralhar
    while (quantidade_shuffle > 0) {
        let randomIndex = Math.floor(Math.random() * vetor.length);
        novoVetor.push(vetor[randomIndex]);
        vetor.splice(randomIndex, 1);
        quantidade_shuffle--;
        if (vetor.length == 0 && quantidade_shuffle > 0) {
            vetor = novoVetor;
            novoVetor = []
        }
    }

    if (vetor.length > 0) {
        novoVetor = novoVetor.concat(vetor);
    }
    return novoVetor

}

const bubble_sort = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {

        for (let j = 0; j < (vetor.length - i - 1); j++) {
            if (vetor[j] > vetor[j + 1]) {
                vetor = swap(vetor, j, j + 1);
            }
        }
    }

    return vetor;
}

const selection_sort = (vetor) => {
    let tamanho = vetor.length;

    for (let i = 0; i < tamanho; i++) {
        let indiceMenor = i;
        for (let j = i + 1; j < tamanho; j++) {
            if (vetor[j] < vetor[indiceMenor]) {
                indiceMenor = j;
            }
        }
        // Trocar  o menor elemento com o primeiro elemento não ordenado
        if (indiceMenor != i) {
            vetor = swap(vetor, i, indiceMenor);
        }
    }
    // O vetor está ordenado
    return vetor;
}

const quick_sort = (vetor, inicio, fim) => {
    let index;
    if (vetor.length > 1) {
        index = particionamento(vetor, inicio, fim);
        if (inicio < index - 1) {
            quick_sort(vetor, inicio, index - 1);
        }
        if (index < fim) {
            quick_sort(vetor, index, fim);
        }
    }
    return vetor;
}

const particionamento = (vetor, inicio, fim) => {

    let pivo = vetor[Math.floor((fim + inicio) / 2)];
    let i = inicio;
    let f = fim;

    while (i <= f) {
        while (vetor[i] < pivo) {
            i++;
        }
        while (vetor[f] > pivo) {
            f++;

        }
        if (i <= f) {
            swap(vetor, i, f);
            i++;
            f++
        }
    }
    return i;

}