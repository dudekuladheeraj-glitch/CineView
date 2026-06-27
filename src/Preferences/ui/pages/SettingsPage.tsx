import { observer } from 'mobx-react-lite'
import { AppButton, AppSelect, PageContainer } from '../../../Common'
import { ThemeToggle } from '../components/ThemeToggle'
import { useSettingsController } from '../controllers/useSettingsController'
import { AccountText, Page, PageTitle, Section, SectionTitle } from './StyledComponents'

const SettingsPageComponent = () => {
  const {
    language,
    region,
    theme,
    languageOptions,
    regionOptions,
    themeOptions,
    username,
    setLanguage,
    setRegion,
    setTheme,
    onLogout,
    t,
  } = useSettingsController()

  return (
    <PageContainer>
      <Page>
        <PageTitle>{t('settings')}</PageTitle>

        <Section aria-labelledby="settings-language-heading">
          <SectionTitle id="settings-language-heading">{t('languageSection')}</SectionTitle>
          <AppSelect
            label={t('languageLabel')}
            value={language}
            options={languageOptions}
            onChange={setLanguage}
          />
        </Section>

        <Section aria-labelledby="settings-region-heading">
          <SectionTitle id="settings-region-heading">{t('regionSection')}</SectionTitle>
          <AppSelect
            label={t('regionLabel')}
            value={region}
            options={regionOptions}
            onChange={setRegion}
          />
        </Section>

        <Section aria-labelledby="settings-theme-heading">
          <SectionTitle id="settings-theme-heading">{t('appearanceSection')}</SectionTitle>
          <ThemeToggle label={t('themeLabel')} value={theme} options={themeOptions} onChange={setTheme} />
        </Section>

        <Section aria-labelledby="settings-account-heading">
          <SectionTitle id="settings-account-heading">{t('accountSection')}</SectionTitle>
          <AccountText>{t('loggedInAs', { username })}</AccountText>
          <AppButton variant="secondary" onClick={onLogout}>
            {t('logout')}
          </AppButton>
        </Section>
      </Page>
    </PageContainer>
  )
}

export const SettingsPage = observer(SettingsPageComponent)