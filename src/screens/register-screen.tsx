import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from '../components/atoms/button';
import Icon from '../components/atoms/icon';
import RadioButton from '../components/atoms/radio-button';
import Section from '../components/molecules/section';

export default function RegisterScreen() {
  const [objectSelected, setObjectSelected] = useState('');
  const [isListDropdown, setIsListDropdown] = useState(false);
  const [isFoundSelected, setIsFoundSelected] = useState(false);
  const [isSamePlaceSelected, setIsSamePlaceSelected] = useState(false);

  return (
    <ScrollView className='mb-8' scrollEnabled={!isListDropdown}>
      <View className='mt-12'>
        <RadioButton
          falseRadioButtonText='Achei'
          trueRadioButtonText='Perdi'
          isSelected={isFoundSelected}
          setIsSelected={setIsFoundSelected}
        />
      </View>
      <Section
        iconDirection='right'
        color='blackDarkGreen'
        icon='chevron-down'
        text='Tipo de Item'
      />
      <View className='items-center my-2 mb-4'>
        {objectSelected && (
          <View className='bg-lightGreen w-48 h-16 p-2 items-center rounded-2xl flex-row pl-4 mb-4'>
            <Icon color='black' icon='check' size='small' />
            <Text className='text-black ml-2'>
              {(objectSelected === 'backpack' && 'Mochila') ||
                (objectSelected === 'notebook' && 'Caderno') ||
                (objectSelected === 'keys' && 'Chaves') ||
                (objectSelected === 'clothes' && 'Roupas') ||
                (objectSelected === 'calculator' && 'Calculadora') ||
                (objectSelected === 'laptop' && 'Notebook') ||
                (objectSelected === 'waterbottle' && 'Garrafinha de Água') ||
                (objectSelected === 'personaldocumentation' &&
                  'Documentação Pessoal') ||
                (objectSelected === 'other' && 'Outro')}
            </Text>
          </View>
        )}
        <Pressable onPress={() => setIsListDropdown(true)}>
          <Text className='text-darkGreen'>Selecionar</Text>
        </Pressable>
      </View>
      {isListDropdown && (
        <View className='z-40 absolute w-full h-full'>
          <View className='opacity-80 bg-black w-full h-full absolute' />

          <Pressable
            onPress={() => {
              setIsListDropdown(false);
            }}
            className='flex-1 z-40'
          />

          <View className='z-50 bg-white absolute mt-56 justify-center self-center items-center flex flex-auto w-60 h-72 opacity-100 rounded-2xl'>
            <ScrollView className='w-full px-8 py-2 mb-4'>
              <Pressable
                onPress={() => {
                  setObjectSelected('backpack');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Mochila
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('notebook');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Caderno
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('smartphone');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Smartphone
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('keys');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Chaves
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('clothes');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Roupa
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('calculator');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Calculadora
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('laptop');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Notebook
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('waterbottle');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Garrafa de Água
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('personaldocumentation');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Documento Pessoal
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setObjectSelected('other');
                  setIsListDropdown(false);
                }}
              >
                <Text className='text-darkGreen py-2 my-2 text-base'>
                  Outro
                </Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      )}
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        icon='hash'
        text='Comente Algo'
      />
      <View className='items-center my-2 mb-4'>
        <TextInput
          placeholder='Comente aqui.'
          multiline={true}
          className='w-96 h-24 border rounded-2xl align-top border-darkGreen text-black px-4'
        />
      </View>
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        icon='image'
        text='Fotos'
      />
      <View className='items-center my-2 mb-4'>
        <TouchableOpacity className='w-20 h-20 rounded-2xl bg-lightGreen justify-center items-center'>
          <Icon color='green' size='large' icon='plus' />
        </TouchableOpacity>
      </View>
      <Section
        iconDirection='left'
        color='blackDarkGreen'
        icon='map'
        text='Último Local do Item'
        largeWidth={true}
      />
      <RadioButton
        falseRadioButtonText='Sim'
        trueRadioButtonText='Não'
        isSelected={isSamePlaceSelected}
        setIsSelected={setIsSamePlaceSelected}
      />
      {isSamePlaceSelected && (
        <View className='items-center'>
          <Text className='text-lg w-80 my-2'>
            Por favor, selecione no mapa o local da perda do item.
          </Text>
        </View>
      )}
      <View className='items-center my-4 mb-8'>
        <Button
          text={isFoundSelected ? 'Confirmar Perda' : 'Confirmar Achado'}
        />
      </View>
    </ScrollView>
  );
}
