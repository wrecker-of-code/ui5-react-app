import {
  ShellBar,
  ProgressIndicator,
  Button,
  ButtonType,
  FileUploader,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const Home = () => {
  return (
    <>
      <ShellBar
        logo={<img src="#" className="h-6 me-2 -mt-1" />}
        primaryTitle="HR Onboarding App"
      />
      <div style={spacing.sapUiContentPadding}>
        <ProgressIndicator value={10} displayValue="10%" />
        <h1 className="font-bold mt-2">Your offer letter</h1>
        <p className="text-sm">Find the offer letter from the link below.</p>
        <Button
          type={ButtonType.Button}
          style={{
            backgroundColor: ThemingParameters.sapButton_Emphasized_Background,
          }}
          className="mt-2 text-white"
        >
          Download offer letter
        </Button>

        <h1 className="font-bold mt-6">Reupload your offer letter</h1>
        <p className="text-sm">
          After signing the offer letter, please reupload the document below.
        </p>
        <div className="flex flex-row items-end">
          <FileUploader
            className="mt-2"
            accept="application/pdf"
            placeholder="Choose file..."
            // style={{ width: '100%' }}
          />
          <Button
            type={ButtonType.Button}
            style={{
              backgroundColor:
                ThemingParameters.sapButton_Emphasized_Background,
            }}
            className="text-white mb-1 min-w-min grow"
          >
            Upload file
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
