import React, { useState,useEffect,useCallback } from "react";
import SelectList from 'react-native-dropdown-select-list';
import { View, ScrollView , StyleSheet,Text, TextInput } from 'react-native';
import { useForm } from 'react-hook-form';
import {Button} from 'react-native-paper';
import axios from 'axios';

const customers = [
  {
    id: 1,
    customer_code: 2901,
    customer_name: "Jakir Hossain"
  },
  {
    id: 2,
    customer_code: 2902,
    customer_name: "Sami"
  },
  {
    id: 3,
    customer_code: 2903,
    customer_name: "Saad"
  }
]

export default function MRFScreen({ navigation }) {
    
    const [selected, setSelected] = React.useState("");
    const [bankSelected, setBankSelected] = React.useState("");
    const customers = [
      {key:'1',value:'Jakir Hossain'},
      {key:'2',value:'Rawaha Abdullah Sami'},
      {key:'3',value:'Abdur Rahman Saad'},
      {key:'4',value:'Ibrahim Salman'},
      {key:'5',value:'Aysha Tasnim'},
    ];

    const banks = [
      {key:'1',value:'Bangledesh Bank'},
      {key:'2',value:'Sonali Bank'},
      {key:'3',value:'Janata Bank'},
      {key:'4',value:'Agrani Bank'},
      {key:'5',value:'City Bank'},
    ];

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = useCallback(formData => {
      console.log(formData);
    }, []);
    const onChangeField = useCallback(
      name => text => {
        setValue(name, text);
      },
      []
    );

  useEffect(() => {
    register('customer_id');
    register('bank_id');
    register('amount');
    register('note');
  }, [register]);

    return (
        <View style={styles.containerStyle}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <Text style={styles.headingStyle}>Money Receipt</Text>
                <SelectList 
                    style={styles.dropdown}
                    setSelected={setSelected} 
                    data={customers}  
                    boxStyles={{borderRadius:0}}
                    onChangeText={onChangeField('customer_id')}
                  />
                <SelectList 
                    style={styles.dropdown}
                    setSelected={setBankSelected} 
                    data={banks}  
                    boxStyles={{marginTop:15,borderRadius:0}}
                    onChangeText={onChangeField('bank_id')}
                  /> 
                <TextInput 
                      type="numeric" 
                      keyboardType="numeric" 
                      style={styles.input}
                      placeholder="Enter Amount"
                      onChangeText={onChangeField('amount')}
                />
                <TextInput 
                      type="text" 
                      style={styles.input} 
                      name="node" 
                      placeholder="Enter Note"
                      onChangeText={onChangeField('note')}
                />
                <Button mode={'contained'} style={styles.button} onPress={handleSubmit(onSubmit)}>
                Submit
                </Button>
          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    scrollViewStyle: {
      flex: 1,
      padding: 15,
      justifyContent: 'center',
    },
    headingStyle: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 40,
    },
    dropdown: {
      marginTop: 10,
    },
    text: {
      fontSize: 24,
    },
    input: {
      height: 50,
      marginTop: 10,
      borderWidth: 1,
      padding: 10,
      width: '100%'
    },
    button:{
      marginTop: 50,
    }
  });
