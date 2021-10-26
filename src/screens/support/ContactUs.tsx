import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BRAND_BLUE, DARKER_BLUE, GRAY3, LIGHTER_GRAY, PRIMARY_BLUE } from '../../constants/colors';
import { EFFRA } from '../../constants/fonts';
import { getHeight } from '../../utils/interfaceDimentions';
import ContactForm from './ContactForm';
import { createComment } from '../../models/Support';
import { TokenModel } from '../../models/TokenModel';
import Indicator from '../../components/Indicator';

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

const ErrorNote = ({ onPress }: any) => {
  return (
    <View style={styles.successNoteContainer}>
      <FontAwesomeIcon size={50} style={styles.iconError} icon="times" />
      <Text style={styles.successTitle}>Error!</Text>
      <Text style={styles.successDescription}>Intenta nuevamente.</Text>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.optionSuccess}>
          <FontAwesomeIcon style={styles.optionSuccessIcon} icon="plus" />
          <Text style={styles.optionSuccessLabel}>Intentar de nuevo</Text>
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

const handleCall = () => {
  Linking.openURL('tel:8000239663');
};

const { GetAdminToken } = TokenModel();
const ContactUs = () => {
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [adminToken, setAdminToken] = useState<any>();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    GetAdminToken().then((token) => setAdminToken(token));
  }, []);

  const { mutate, isLoading } = useMutation('createComment', createComment, {
    onSuccess: async () => setIsSuccessMessage(true),
    onError: () => setIsError(true),
  });

  return (
    <ScrollView>
      <Header />
      <View style={styles.container}>
        <SectionTitle title="Call Center">
          <TouchableOpacity onPress={() => handleCall()}>
            <View style={styles.sectionCallCenter}>
              <FontAwesomeIcon style={styles.iconInSection} size={25} icon="headset" />
              <Text style={styles.phoneNumber}>800-0-239663</Text>
            </View>
          </TouchableOpacity>
        </SectionTitle>
        {isLoading && <Indicator />}
        {isError && <ErrorNote onPress={() => setIsError(false)} />}
        {isSuccessMessage && !isLoading && <SuccessNote onPress={() => setIsSuccessMessage(false)} />}
        {!isSuccessMessage && !isLoading && (
          <SectionTitle title="Déjanos una nota">
            <ContactForm
              onPress={(data: any) =>
                mutate({
                  ...data,
                  adminToken,
                })
              }
            />
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
  },
  textInput: {
    marginBottom: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: LIGHTER_GRAY,
  },
  icon: {
    color: PRIMARY_BLUE,
    marginRight: 12,
  },
  iconError: {
    color: 'red',
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
