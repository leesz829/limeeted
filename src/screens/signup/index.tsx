import { ColorType } from '@types';
import { styles } from 'assets/styles/Styles';
import { CommonBtn } from 'component/CommonBtn';
import CommonHeader from 'component/CommonHeader';
import { CommonInput } from 'component/CommonInput';
import { CommonText } from 'component/CommonText';
import SpaceView from 'component/SpaceView';
import * as React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ICON } from 'utils/imageUtils';

export const Signup0 = () => {
	return (
		<>
			<CommonHeader title={'가입정보'} />
			<ScrollView contentContainerStyle={[styles.scrollContainer]}>
				<SpaceView mb={24}>
					<CommonText fontWeight={'500'}>
						본인 인증을 기반으로 회원님의 정보가{'\n'}
						자동입력됩니다.
					</CommonText>
				</SpaceView>

				<CommonInput label="아이디" placeholder={'kakao@gmail.com'} />

				<View style={styles.infoContainer}>
					<SpaceView mt={4}>
						<Image source={ICON.info} style={styles.iconSize} />
					</SpaceView>

					<SpaceView ml={8}>
						<CommonText color={ColorType.gray6666}>
							카카오를 통해 로그인하여, 비밀번호 입력없이 편하게{'\n'}
							이용하실 수 있습니다.
						</CommonText>
					</SpaceView>
				</View>

				<SpaceView mb={24}>
					<CommonInput label="이름" placeholder={'회원명'} />
				</SpaceView>

				<SpaceView mb={24}>
					<View style={styles.halfContainer}>
						<View style={styles.halfItemLeft}>
							<CommonInput label="나이" placeholder={'20'} />
						</View>
						<View style={styles.halfItemRight}>
							<CommonInput label="성별" placeholder={'남자'} />
						</View>
					</View>
				</SpaceView>

				<SpaceView mb={24}>
					<CommonInput label="전화번호" placeholder={'01012345678'} />
				</SpaceView>
				<SpaceView mb={24}>
					<CommonBtn value={'다음 (1/4)'} type={'primary'} />
				</SpaceView>
			</ScrollView>
		</>
	);
};
