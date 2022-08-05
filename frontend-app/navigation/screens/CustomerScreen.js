import * as React from 'react';
import { View, ScrollView , StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const url = "http://localhost:3003";
const customers = [
    { code: 2901, name: 'Jakir Hossain'},
    { code: 2902, name: 'Rawaha Abdullah Sami'},
    { code: 2903, name: 'Abdur Rahman Saad'},
    { code: 2904, name: 'Ibrahim Salman'},
    { code: 2905, name: 'Aysha Tasnim'},
    { code: 2906, name: 'Anisha Rahman Orin'},
    { code: 2907, name: 'Jabir Al Hasan'},
    { code: 2908, name: 'Mowaz'},
    { code: 2909, name: 'Jara'},
    { code: 2910, name: 'Redoyan Ahmed'},
    { code: 2911, name: 'Shaharian Islam Emon'},
    { code: 2912, name: 'Emon Islam'},

]

export default function CustomerScreen({ navigation }) {

    // const [customers, setCustomers] = useState([]);

    //   useEffect(() => {
    //     const fetchCustomer = async () => {
    //       const {data} = await axios.get(`${url}customers`);
    //       setCustomers(data);
    //       console.log(data);
    //     };
    //     fetchCustomer();
    //   }, []);
    return (
        <ScrollView   style={styles.container}>
            <DataTable>
                <DataTable.Header>
                <DataTable.Title>Code</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                </DataTable.Header>

                {customers.map((cust) => (
                    <DataTable.Row>
                        <DataTable.Cell>{cust.code}</DataTable.Cell>
                        <DataTable.Cell>{cust.name}</DataTable.Cell>
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