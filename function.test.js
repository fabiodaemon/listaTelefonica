const functions = require('./functions.js');

// Assync await
test('Testar se aparece o primeiro nome da lista JSON', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.contatos.nome).toEqual('Bruno');
});