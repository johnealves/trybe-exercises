class tv():
    _volume = 50
    _canal = 1
    _ligada = False

    def __init__(self, tamanho):
        self._tamanho = tamanho

    def aumentar_volume(self):
        if self._volume < 99:
            self._volume = self._volume + 1

    def diminuir_volume(self):
        if self._volume > 1:
            self._volume = self._volume - 1

    def alterar_canal(self, canal_escolhido):
        if 1 <= canal_escolhido <= 99:
            self._canal = canal_escolhido
        else:
            raise ValueError
