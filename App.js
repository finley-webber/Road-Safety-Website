import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Teenage Road Safety</Text>
      <Image source={require('./assets/TeenageRoadSafety_Poster.jpg')} style={styles.image}/>
      
      <ImageBackground style={styles.background} source={require('./assets/Untitled design.jpg')}>
        <Text style={styles.subTitle}>Importance of Road Safety</Text>
        <Text style={styles.content}>
        Navigating the maze of adolescence is a significant milestone, and for many teenagers, learning to drive is a rite of passage that symbolizes freedom and independence. 
        However, with this newfound freedom comes an immense responsibility – the duty of road safety. 
        Every year, heartbreaking statistics reveal that teenagers are disproportionately at risk for road accidents. 
        Many of these accidents, tragically, are preventable.

        The importance of road safety for teenagers cannot be stressed enough. As teenagers get behind the wheel, they are navigating unfamiliar terrains, both physically on the road and emotionally, as they grapple with a complex mesh of newfound responsibilities. 
        Inexperience, coupled with the invulnerability often felt in youth, can sometimes lead to decisions that have lasting consequences. 
        Overspeeding, distractions like texting or chatting, and even the influence of peers can cloud judgment. But with proper awareness, education, and guidance, we can equip our young drivers with the tools they need to make safer choices on the road. 
        After all, every trip taken should be one where they return home safely. 
        Remember, driving is not just about maneuvering a vehicle; it's about safeguarding lives - both yours and those around you.
        </Text>
      </ImageBackground>

      <Text style={styles.subTitle}>Driving Tips for Teenagers</Text>
      <Text style={styles.dotPoint}>• Start Slow: Initially, avoid highways and stick to roads you're familiar with.</Text>
      <Text style={styles.dotPoint}>• Limit Distractions: Keep your phone out of reach while driving. If you need to use it, pull over safely first.</Text>
      <Text style={styles.dotPoint}>• Never Drink and Drive: Even a small amount of alcohol can impair judgment.</Text>
      <Text style={styles.dotPoint}>• Follow Speed Limits: They are there for a reason. Speeding can reduce reaction time significantly.</Text>
      <Text style={styles.dotPoint}>• Use Seatbelts: Always buckle up, regardless of how short your trip is.</Text>
      <Text style={styles.dotPoint}>• Maintain a Safe Following Distance: Keep at least a 3-second gap between you and the vehicle in front.</Text>
      <Text style={styles.dotPoint}>• Limit Peer Passengers: The risk of a fatal crash increases with each additional teenage passenger.</Text>
      <Text style={styles.dotPoint}>• Avoid Night Driving: Until you're more experienced, try to avoid driving during nighttime.</Text>
      <Text style={styles.dotPoint}>• Weather Caution: In adverse weather conditions, drive slower and increase your following distance.</Text>
      <Text style={styles.dotPoint}>• Use Indicators: Always signal your intentions to other drivers when turning or changing lanes.</Text>
      <Text style={styles.dotPoint}>• Stay Calm: Road rage can be dangerous. Maintain a calm demeanor and avoid confrontations.</Text>
      <Text style={styles.dotPoint}>• Regular Maintenance: Ensure your car is in good condition. Regularly check brakes, lights, tires, etc.</Text>
      <Text style={styles.dotPoint}>• Avoid Tailgating: Tailgating can lead to accidents if the car in front stops suddenly.</Text>
      <Text style={styles.dotPoint}>• Hands on the Wheel: Always keep both hands on the steering wheel, ideally in the 9 o'clock and 3 o'clock positions.</Text>
      <Text style={styles.dotPoint}>• Learn Defensive Driving: Always be aware of other drivers and anticipate their actions.</Text>
      <Text style={styles.dotPoint}>• Plan Your Route: Familiarize yourself with your route, especially if it's somewhere new. Use navigation tools if needed.</Text>
      <Text style={styles.dotPoint}>• Practice Parking: Spend extra time practicing parking in different settings.</Text>
      <Text style={styles.dotPoint}>• Obey All Road Signs: They're there to guide you and ensure safety.</Text>
      <Text style={styles.dotPoint}>• Know Emergency Procedures: Understand what to do in case of a tire blowout, brake failure, or any other emergency.</Text>
      <Text style={styles.dotPoint}>• Stay Updated: Rules and vehicle technologies evolve. Stay updated on the latest in road safety and car features.</Text>


      <Text style={styles.subTitle}>Statistics & Facts</Text>
      <Text style={styles.dotpoint}>• Risky Age Bracket: Teenagers, especially those aged 16-19, are three times more likely than drivers aged 20 and older to be involved in a fatal crash.</Text>
      <Text style={styles.dotpoint}>• Gender Differences: Teenage male drivers are twice as likely to get into a fatal crash as females.</Text>
      <Text style={styles.dotpoint}>• Passenger Influence: The presence of male passengers increases the likelihood of risky driving behavior among teenage male drivers.</Text>
      <Text style={styles.dotpoint}>• Lack of Seatbelt Use: In 2019, 45% of teen drivers killed in motor vehicle collisions were not wearing a seatbelt.</Text>
      <Text style={styles.dotpoint}>• Alcohol Involvement: In 2019, 15% of teen drivers involved in fatal crashes had alcohol in their system.</Text>
      <Text style={styles.dotpoint}>• Distracted Driving: 9% of teen driving deaths in 2019 were reported to involve distractions.</Text>
      <Text style={styles.dotpoint}>• Nighttime Driving: 40% of teen motor vehicle deaths in 2019 occurred between 9 p.m. and 6 a.m.</Text>
      <Text style={styles.dotpoint}>• Weekend Risk: More than half of teen motor vehicle deaths in 2019 took place on Friday, Saturday, or Sunday.</Text>
      <Text style={styles.dotpoint}>• Learning Curve: Teen drivers' crash risk is highest in the first year after getting their license.</Text>
      <Text style={styles.dotpoint}>• Cell Phone Usage: 39% of U.S. high school students reported they had texted or emailed while driving at least once in the past month.</Text>
      <Text style={styles.dotpoint}>• Peer Pressure: Teens are more likely to engage in risky driving behaviors when they have peers as passengers.</Text>
      <Text style={styles.dotpoint}>• Graduated Licensing: States with robust graduated licensing programs have seen up to a 40% decrease in fatal crashes among 16-year-old drivers.</Text>
      <Text style={styles.dotpoint}>• New Drivers: Crash rates are highest within the first months of acquiring a license.</Text>
      <Text style={styles.dotpoint}>• Speeding: In 2019, speed was a factor in 30% of fatal crashes involving teen drivers.</Text>
      <Text style={styles.dotpoint}>• Motorcycle Safety: Helmet use among teenage motorcyclists is lower than that of older age groups.</Text>
      <Text style={styles.dotpoint}>• Lack of Experience: Crashes are more common among teens than older drivers, largely due to their lack of experience and ability to recognize and respond to hazards.</Text>
      <Text style={styles.dotpoint}>• Rural Roads Danger: Over half of all crashes involving teenage drivers occur on rural roads.</Text>
      <Text style={styles.dotpoint}>• Seatbelt Efficacy: Teens who live in states with primary enforcement seatbelt laws are 12% more likely to wear their seatbelt as compared to those in states without.</Text>
      <Text style={styles.dotpoint}>• Fatalities Impact: Teen drivers account for roughly 5% of licensed drivers but are involved in about 8% of all fatal crashes.</Text>
      <Text style={styles.dotpoint}>• Economic Impact: The total societal costs of motor vehicle crashes in which teens were involved were estimated to be about $13.1 billion, which is approximately 8% of the total costs of all motor vehicle crashes.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  dotPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'black',
    marginRight: 10,
  },
  dotPointText: {
    flex: 1,
    fontSize: 16,
  },
  background: {
    height:'100%',
    width: '100%',
    textAlign: 'center',
  },
});
