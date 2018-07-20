import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Utils } from "./Utils";
import Controls from "./Controls";
import GeneralPicker from "../../../app/components/Picker/Picker";
import moment from "moment-jalaali";
const Triangle = ({
                    bottomWidth,
                    containerStyle,
                    color,
                    direction = "top"
                  }) => (
  <View
    style={[
      {
        width: 0,
        height: 0,
        borderLeftWidth: bottomWidth / 2,
        borderRightWidth: bottomWidth / 2,
        borderBottomWidth: direction === "top" ? bottomWidth : 0,
        borderTopWidth: direction === "top" ? 0 : bottomWidth,
        borderTopColor: color,
        borderStyle: "solid",
        backgroundColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
        marginBottom: 3
      },
      containerStyle
    ]}
  />
);
export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
    minDate,
    maxDate
  } = props;
  console.log('props')
  // console.log(props)
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : "Previous";
  const next = nextTitle ? nextTitle : "Next";
  const month = MONTHS[currentMonth];
  const year = currentYear;
  renderMonths = () => {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return monthName.map((item, index) => {
      return (
        <Text
          key={index}
          style={{ textAlign: "center", fontSize: 16 }}
          label={item}
          value={index}
        >
          {item}
        </Text>
      );
    });
  };
  renderYears = () => {
    const minYear =minDate.year()
    const maxYear =maxDate.year()
    // console.log(props.minDate.year())
    // console.log(props.maxDate.year())
    let textArrayComponent = [];
    let currentYear = new Date().getFullYear();
    for (i = maxYear; i >= minYear; i--) {
      textArrayComponent.push(
        <Text
          key={i}
          style={{ textAlign: "center", fontSize: 16 }}
          label={i}
          value={i}
        >
          {i}
        </Text>
      );
    }
    return textArrayComponent;
  };
  return (
    <View style={styles.headerWrapper}>
      <Controls
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />
      <View>
        {/*<GeneralPicker*/}
        {/*placeHolderTextStyle={[styles.monthLabel, textStyle]}*/}
        {/*placeHolderText={year}*/}
        {/*onValueChange={value => {*/}
        {/*props.handleSetYear(value);*/}
        {/*}}*/}
        {/*>*/}
        {/*{this.renderYears()}*/}
        {/*</GeneralPicker>*/}
        <View
          style={[
            styles.monthLabel,
            {

              backgroundColor: "#bba067",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 6,
              borderStyle: "solid",
              borderColor: "#bba067",
              marginBottom: 2
            }
          ]}
        >
          <View style={{ marginLeft: 5, position: "absolute" }}>
            <Triangle
              bottomWidth={10}
              containerStyle={{ marginBottom: 3 }}
              color={"white"}
              direction={"top"}
            />

            <Triangle
              bottomWidth={10}
              containerStyle={{ marginBottom: 3 }}
              color={"white"}
              direction={"bottom"}
            />
          </View>
          <GeneralPicker
            placeHolderTextStyle={[
              styles.monthLabel,
              textStyle,
              { color: "#fff" }
            ]}
            isItemSearchable={true}
            // placeHolderTextStyle={[.monthLabel, textStyle]}
            placeHolderText={year}
            onValueChange={value => {
              props.handleSetYear(value);
            }}
          >
            {this.renderYears()}
          </GeneralPicker>
        </View>

        <View
          style={[
            styles.monthLabel,
            {
              backgroundColor: "#bba067",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 6,
              borderStyle: "solid",
              borderColor: "#bba067"
            }
          ]}
        >
          <View style={{ marginLeft: 5, position: "absolute" }}>
            <Triangle
              bottomWidth={10}
              containerStyle={{ marginBottom: 3 }}
              color={"white"}
              direction={"top"}
            />

            <Triangle
              bottomWidth={10}
              containerStyle={{ marginBottom: 3 }}
              color={"white"}
              direction={"bottom"}
            />
          </View>
          <GeneralPicker
            placeHolderTextStyle={[
              styles.monthLabel,
              textStyle,
              { color: "#fff" }
            ]}
            placeHolderText={month}
            onValueChange={value => {
              props.handleSetMonth(value);
            }}
          >
            {this.renderMonths()}
          </GeneralPicker>
        </View>
        {/*<Text style={[styles.monthLabel, textStyle]}>*/}
        {/*{ month } { year }*/}
        {/*</Text>*/}
      </View>
      <Controls
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func
};
