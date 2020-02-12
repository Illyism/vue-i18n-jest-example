import { mount } from '@/tests/vue'
import BottleCounter from '../BottleCounter.vue'
import { loadLanguage } from '@/i18n'

test('BottleCounter', async () => {
    const wrapper = mount(BottleCounter)

    // nothing =(
    expect(wrapper.find('h2').text()).toEqual('No bottles of beer on the wall')

    // drink more?
    wrapper.find('#incr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('A lonely bottle of beer on the wall')

    // eentje is geentje
    wrapper.find('#incr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('2 bottles of beer on the wall')

    // better clean up
    wrapper.find('#decr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('A lonely bottle of beer on the wall')
})

test('BottleCounter in Dutch', async () => {
    const wrapper = mount(BottleCounter)
    await loadLanguage('nl') // load Dutch locale

    // nothing =(
    expect(wrapper.find('h2').text()).toEqual('Geen flesjes op de muur')

    // drink more?
    wrapper.find('#incr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('Een eenzaam pintje op de muur')

    // eentje is geentje
    wrapper.find('#incr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('2 pintjes op de muur')

    // better clean up
    wrapper.find('#decr').trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('h2').text()).toEqual('Een eenzaam pintje op de muur')
})