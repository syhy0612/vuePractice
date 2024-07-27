import { defineStore } from 'pinia'

export const useTitleStore = defineStore('title', {
    state: () => ({
        title: '默认标题',
        description: '这是默认描述'
    }),

    actions: {
        setTitle(newTitle) {
            this.title = newTitle
        },

        setDescription(newDescription) {
            this.description = newDescription
        },

        reset() {
            this.title = '默认标题'
            this.description = '这是默认描述'
        }
    },

    getters: {
        titleUpperCase() {
            return this.title.toUpperCase()
        },

        descriptionPreview() {
            return this.description.length > 50
                ? this.description.substring(0, 50) + '...'
                : this.description
        }
    }
})