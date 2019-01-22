import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";

export default class App extends Component {
  state = {
    textOne: "",
    textTwo: "",
    textThree: "",
    list: []
  };

  _keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  handleName = val => {
    this.setState({
      textOne: val
    });
  };

  handleSubject = val => {
    this.setState({
      textTwo: val
    });
  };

  handleMessage = val => {
    this.setState({
      textThree: val
    });
  };

  handlePress = () => {
    this.setState({
      list: [
        ...this.state.list,
        "Name : " + this.state.textOne,
        "Subject : " + this.state.textTwo,
        "Message : " + this.state.textThree
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWraper}>
          <View style={styles.nameContainer}>
            <Text style={styles.refStyle}>Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.textStyle}
              value={this.state.text}
              onChangeText={this.handleName}
            />
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.refStyle}>Subject</Text>
            <TextInput
              placeholder="subject"
              style={styles.textStyle}
              value={this.state.text}
              onChangeText={this.handleSubject}
            />
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.refStyle}>Message</Text>
            <TextInput
              placeholder="message"
              style={styles.msgStyle}
              value={this.state.text}
              onChangeText={this.handleMessage}
              multiline={true}
            />
          </View>
          <Button title="Submit" onPress={this.handlePress} />

          <FlatList
            data={this.state.list}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputWraper: {
    flex: 1,
    width: "100%"
  },
  nameContainer: {
    flexDirection: "row",
    margin: 10,
    //justifyContent: "center",
    alignItems: "center",
    width: "95%",
    paddingTop: 5
  },
  refStyle: {
    width: "15%"
  },
  textStyle: {
    width: "85%",
    borderColor: "black",
    borderWidth: 0.5,
    paddingHorizontal: 10
  },
  msgStyle: {
    width: "85%",
    borderColor: "black",
    borderWidth: 0.5,
    height: 120,
    paddingHorizontal: 10
  }
});
