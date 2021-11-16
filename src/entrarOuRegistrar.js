module.exports = {
    entrar(){
        if (caixalogin.style.display == 'none' && caixaregistrar.style.display == 'none') {
            caixalogin.style.display = 'flex'
        } else if (caixalogin.style.display == 'none' && caixaregistrar.style.display == 'flex') {
            caixalogin.style.display = 'flex'
            caixaregistrar.style.display = 'none'
        }else if (caixalogin.style.display == 'flex') {
            caixalogin.style.display = 'none'
        }
        
    },
   
    registrar(){
        if (caixaregistrar.style.display == 'none' && caixalogin.style.display == 'none') {
            caixaregistrar.style.display = 'flex'
        } else if (caixaregistrar.style.display == 'none' && caixalogin.style.display == 'flex') {
            caixaregistrar.style.display = 'flex'
            caixalogin.style.display = 'none'}
   
        else if (caixaregistrar.style.display == 'flex') {
            caixaregistrar.style.display = 'none'}
        
    }
}