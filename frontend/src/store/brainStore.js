import { reactive } from 'vue'

export const brainStore = reactive({
  learnedConcepts: [], // Array de { title: String, text: String }
  
  addConcept(title, text) {
    // Normalizamos el texto para evitar duplicados idénticos
    const normalizedText = text.trim().toLowerCase()
    const exists = this.learnedConcepts.find(c => c.text.trim().toLowerCase() === normalizedText)
    
    if (!exists) {
      this.learnedConcepts.push({ title, text })
      console.log('Concepto añadido al cerebro global:', title)
    }
  },

  getRandomConcept() {
    if (this.learnedConcepts.length === 0) return null
    const randomIndex = Math.floor(Math.random() * this.learnedConcepts.length)
    return this.learnedConcepts[randomIndex]
  }
})
