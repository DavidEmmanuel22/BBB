import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import { BRAND_BLUE, DARKER_BLUE, GRAY3, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { EFFRA } from '../../constants/fonts';
import { getHeight } from '../../utils/interfaceDimentions';

type HeaderProps = {
  onPress?: () => void;
};

const SuccessNote = ({ onPress }: any) => {
  return (
    <View style={styles.successNoteContainer}>
      <FontAwesomeIcon size={50} style={styles.icon} icon={['far', 'check-circle']} />
      <Text style={styles.successTitle}>¡Gracias!</Text>
      <Text style={styles.successDescription}>
        Tus dudas o sugerencias son imporantes, pronto estaremos en contacto.
      </Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.optionSuccess}>
          <FontAwesomeIcon style={styles.optionSuccessIcon} icon="plus" />
          <Text style={styles.optionSuccessLabel}>Enviar otra nota</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SectionTitle = ({ title, children }: any) => {
  return (
    <View style={[styles.containerTitle, styles.borderBottom]}>
      <Text style={styles.headTitle}>{title}</Text>
      {children}
    </View>
  );
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconRight}>
        <FontAwesomeIcon size={20} icon="times" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>contacto</Text>
    </View>
  );
};

const SectionItem = ({ label, leftIcon }: any) => {
  return (
    <View style={styles.containerSectionItem}>
      {leftIcon}
      <Text style={styles.itemLabel}>{label}</Text>
      <FontAwesomeIcon icon="chevron-right" style={[styles.icon, styles.positionRight]} />
    </View>
  );
};

const ContactUs = () => {
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <SectionTitle title="Call Center">
          <View style={styles.sectionCallCenter}>
            <FontAwesomeIcon style={styles.iconInSection} size={25} icon="headset" />
            <Text style={styles.phoneNumber}>800-0-239663</Text>
          </View>
        </SectionTitle>
        {isSuccessMessage && <SuccessNote onPress={() => setIsSuccessMessage(false)} />}
        {!isSuccessMessage && (
          <SectionTitle title="Déjanos una nota">
            <TextInput
              placeholder="Escribe tu duda, consulta,nota, etc…"
              style={styles.textArea}
              multiline={true}
              numberOfLines={5}
              onChangeText={() => {}}
            />
            <Button containerStyle={styles.button} title="Enviar" onPress={() => setIsSuccessMessage(true)} />
          </SectionTitle>
        )}
        <SectionTitle title="Más temas de ayuda">
          <SectionItem
            label="Preguntas frecuentes"
            leftIcon={<FontAwesomeIcon style={styles.iconInSection} size={25} icon={['far', 'question-circle']} />}
          />
          <SectionItem
            label="Asistencia por chat"
            leftIcon={<FontAwesomeIcon style={styles.iconInSection} size={25} icon={['far', 'comment-dots']} />}
          />
          <SectionItem
            label="Nuestra redes sociales"
            leftIcon={<FontAwesomeIcon style={styles.iconInSection} size={25} icon="share-alt" />}
          />
        </SectionTitle>
      </View>
    </ScrollView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  optionSuccessIcon: {
    color: PRIMARY_BLUE,
  },
  optionSuccessLabel: {
    fontSize: 17,
    marginLeft: 12,
    color: PRIMARY_BLUE,
  },
  optionSuccess: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  successNoteContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: EFFRA,
    marginTop: 15,
  },
  successDescription: {
    fontFamily: EFFRA,
    marginTop: 15,
    fontSize: 17,
    color: GRAY3,
  },
  container: {
    marginLeft: 36,
    marginRight: 36,
  },
  positionRight: {
    marginLeft: 'auto',
  },
  itemLabel: {
    fontSize: 18,
    fontFamily: EFFRA,
    fontWeight: '600',
    marginLeft: 12,
  },
  containerSectionItem: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: LIGHTER_GRAY,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  button: {
    marginTop: 24,
    width: '100%',
    height: 60,
  },
  textArea: {
    height: 150,
    padding: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: LIGHTER_GRAY,
  },
  icon: {
    color: PRIMARY_BLUE,
    marginRight: 12,
  },
  phoneNumber: {
    marginLeft: 12,
    fontSize: 18,
    color: PRIMARY_BLUE,
    fontWeight: '700',
  },
  sectionCallCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    position: 'relative',
    height: getHeight(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    position: 'absolute',
    right: 25,
  },
  iconInSection: {
    color: PRIMARY_BLUE,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'TerminaW05-Bold',
    color: DARKER_BLUE,
  },
  containerTitle: {
    flexDirection: 'column',
    marginTop: 12,
  },
  borderBottom: {
    paddingBottom: 23,
    borderBottomColor: LIGHTER_GRAY,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  headTitle: {
    color: BRAND_BLUE,
    fontSize: 18,
    fontFamily: EFFRA,
    marginBottom: 16,
    fontWeight: '700',
  },
});
