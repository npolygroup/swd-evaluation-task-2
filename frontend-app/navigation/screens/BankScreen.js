import React, { useState,useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

// const url = "http://localhost:3003";
const banks = [
    { id: 1, name: 'Bangladesh Bank'},
    { id: 2, name: 'Sonali Bank'},
    { id: 3, name: 'Janata Bank'},
    { id: 4, name: 'Agrani Bank'},
    { id: 5, name: 'City Bank'},
    { id: 6, name: 'Brack Bank'},
    { id: 7, name: 'AB Bank'}, 
]

export default function BankScreen({ navigation }) {
     
    // const [banks, setBanks] = useState([]);

    //   useEffect(() => {
    //     const fetchBank = async () => {
    //       const {data} = await axios.get(`${url}banks`);
    //       setBanks(data);
    //       console.log(data);
    //     };
    //     fetchBank();
    //   }, []);
   
    return (
        <ScrollView   style={styles.container}>
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>SL</DataTable.Title>
                <DataTable.Title>Bank Name</DataTable.Title>
                </DataTable.Header>

                {banks.map((bank) => (
                    <DataTable.Row>
                        <DataTable.Cell>{bank.id}</DataTable.Cell>
                        <DataTable.Cell>{bank.name}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      marginBottom: 0,
      paddingHorizontal: 20,
    },
  });