import supabase from './supabase.js'

async function salvarNome() {
  const nome = document.getElementById('nome').value

  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nome: nome }])

  if (error) {
    console.error(error)
    alert('Erro ao salvar')
  } else {
    alert('Salvo com sucesso!')
  }
}